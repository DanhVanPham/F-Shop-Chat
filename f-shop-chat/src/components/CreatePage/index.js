import React, { Fragment, useEffect, useRef, useState } from 'react';
import './style.css';
import Loading from '../../assets/loading-big.svg';
import AuthenticationService from '../../services/AuthenticationService';
import Account from '../../assets/account.svg';
import Close from '../../assets/close.png';
import { useHistory } from 'react-router';
import { BASE_URL_WEBSOCKET_SERVER } from '../../constants/url.constant';

let stompClient = null;
export const CreatePage = () => {
    const inputAddRef = useRef();
    const [display, setDisplay] = useState(false);
    const [text, setText] = useState("");
    const [modalStyle, setModalStyle] = useState(null);
    const [searchUser, setSearchUser] = useState([]);
    const [listUser, setListUser] = useState([]);
    const [name, setName] = useState({
        automation: true,
        text: ""
    })
    const [error, setError] = useState("");

    const history = useHistory();
    useEffect(() => {
        connect();
        setModalStyle({
            'position': 'absolute',
            'top': `${inputAddRef.current.offsetTop + 50}px`,
            'left': `${inputAddRef.current.offsetLeft + 10}px`,
            'width': '360px',
            'maxWidth': '100%',
            // 'minHeight': '360px',
            'backgroundColor': 'white',
            'borderRadius': '20px',
            'boxShadow': '0px 8px 16px 0px rgba(0, 0, 0, 0.2)',
            'paddingTop': '20px'
        })
    }, [])


    const connect = () => {
        const Stomp = require("stompjs");
        var SockJS = require("sockjs-client");
        SockJS = new SockJS(`${BASE_URL_WEBSOCKET_SERVER}ws`);
        stompClient = Stomp.over(SockJS);
        stompClient.connect({}, onConnected, onError);
    };

    const onConnected = () => {
        console.log("ko vo luon")
        stompClient.subscribe(
            "/user/" + AuthenticationService.getUserId() + "/queue/messages",
            onMessageReceived
        );
    };

    const onError = (err) => {
        console.log(err);
    };

    const onMessageReceived = (msg) => {
        if (msg.body) {
            if(msg.body !== "Failed!"){
                history.push("/chat/" + msg.body)
            } else {
                setError("Room is available!");
            }
        }
    };


    const changeHandler = e => {
        setText(e.target.value);
        if (e.target.value.trim() !== '') {
            loadSearch(e.target.value.trim())
        } else {
            setSearchUser([])
        }
    }

    const loadSearch = async (search) => {
        try {
            const response = await AuthenticationService.getSearch(search);
            if (response.status === 200) {
                const data = response.data;
                console.log(data.length)
                if (data.length !== 0) {
                    setSearchUser(data);
                } else {
                    setSearchUser(null);
                }
            }
        } catch (ex) {
            setSearchUser(null)
        }
    }

    const focusHandler = e => {
        setDisplay(true);
    }

    const blurHandler = e => {
        setDisplay(() => false);
    }

    const saveHandler = (e, user) => {
        let listUserAddToGroup = [...listUser];
        let index = -1;
        index = listUserAddToGroup.findIndex(item => item.userId === user.userId);
        if (index === -1) {
            listUserAddToGroup.push(user);
            setListUser(listUserAddToGroup);
        }
    }

    const removeUserFromListHandler = (e, id) => {
        const removedList = listUser.filter(user => user.userId !== id);
        setListUser(removedList);
    }

    const changeNameHandler = (e) => {
        setName({
            automation: false,
            text: e.target.value
        })
    }

    const submitForm = async e => {
        e.preventDefault();
        const listParticipants = [...listUser].map(user => {
            return {
                userId: user.userId,
                name: user.name,
                avatar: user.avatar
            }
        })
        listParticipants.push({
            userId: AuthenticationService.getUserId(),
            name: AuthenticationService.getUserName(),
            avatar: AuthenticationService.getAvatar()
        })
        const listMessages = [{
            content: AuthenticationService.getUserName() + " đã tạo cuộc trò chuyện."
        }]
        const room = {
            roomName: name.text,
            roomAvt: "",
            participants: listParticipants,
            chatMessages: listMessages,
        }

        stompClient.send("/app/chat/create/" +  AuthenticationService.getUserId(), {}, JSON.stringify(room));
    }

    let modal = null;
    if (searchUser === null) {
        modal = <div className="loading">
            No information!
    </div>
    } else if (searchUser.length === 0) {
        modal = <div className="loading">
            <img src={Loading} className="loading-img" alt="Loading" width="10%" />
        </div>
    } else {
        modal = <div style={{ 'width': '100%' }}>
            {searchUser.map((user, index) => {
                return <div className="list-group-item" key={index} onMouseDown={e => saveHandler(e, user)}>
                    <div className="media">
                        <img src={Account} alt="user" className="avatar" />
                        <div className="media-body">
                            <div className="subtitle">
                                {user.name}
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    }
    return <div className="create-container">
        <div className="create-header">
            <div className="avatar-group">
                Đến
            </div>
            <div className="list-user">
                {listUser.map((item, index) => {
                    return <div key={index} className="user">
                        <span className="span-name">{item.name}</span>
                        <img className="exist" onClick={e => removeUserFromListHandler(e, item.userId)} src={Close} alt="close" />
                    </div>
                })}
            </div>
            <div className="name-group">
                <input id="input-select" ref={inputAddRef} value={text} onChange={changeHandler} onBlur={blurHandler} onFocus={focusHandler} />
            </div>
        </div>
        <div className="create-body-wrapper">
            <form className="create-body" onSubmit={submitForm}>
                    <div className="input-avt-group">
                        <h3>Select Image for Group</h3>
                        <img className="defaultImage" width="200px" height="200px" src={Account} alt="default-account" />
                    </div>
                    <div className="input-name-group">
                        <h3>Set Name for Group</h3>
                        <div style={{ 'borderBottom': 'none' }} className="name-group">
                            <input onChange={changeNameHandler} value={name.text} placeholder="Group Name" />
                        </div>
                    </div>
                    <div className="btn-create">
                        <button type="submit" className="btn">Create</button>
                        <p className="error">{error}</p>
                    </div>
            </form>
        </div>
        {display ? <div style={modalStyle}>
            {modal}
        </div> : null}

    </div>
}