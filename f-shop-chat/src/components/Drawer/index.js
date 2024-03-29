import React, { useState, useEffect, useRef, Fragment } from 'react';
import { useHistory } from 'react-router';
import AuthenticationService from '../../services/AuthenticationService';
import UserService from '../../services/UserService';
import './style.css';
import FemaleAvatar from '../../assets/anonymous_female.jpg';
import MaleAvatar from '../../assets/anonymous_male.jpg';
import Close from '../../assets/close.png';
import Menu from '../../assets/menu.png'
import Plus from '../../assets/plus.png'
import VideoPlus from '../../assets/video-plus.png';
import DropDown from '../../assets/menu-down.png';
import Loading from '../../assets/loading-big.svg';
import Like from '../../assets/like.png';
import { BASE_URL_WEBSOCKET_SERVER } from '../../constants/url.constant';

let stompClient = null;
function Drawer() {
    //state
    const [active, setActive] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const [dimmensions, setDimmensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    const mounted = useRef(false);
    const [contacts, setContacts] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    // const [text, setText] = useState("");
    const [searchUser, setSearchUser] = useState([]);
    const [newMessage, setNewMessage] = useState(undefined);

    //variable
    const inputRef = useRef();
    const history = useHistory();

    //useEffect

    useEffect(() => {
        function handleResize() {
            if (dimmensions.width < 900 && window.innerWidth >= 900) {
                window.location.reload();
                setDimmensions({ height: window.innerHeight, width: window.innerWidth });
            } else if (dimmensions.width >= 900 && window.innerWidth < 900) {
                // document.getElementById("list_user").style.width = "0";
                setDimmensions({ height: window.innerHeight, width: window.innerWidth });
            }
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [window.innerWidth]);

    useEffect(() => {
        mounted.current = true;
        connect()
        loadContacts();
        return () => { mounted.current = false }
    }, [])

    useEffect(() => {
        if (newMessage === undefined) return;
        console.log("render")
        loadContacts();
    }, [newMessage])

    //connection
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
            setNewMessage(msg.body);
        }
    };

    //function
    const logout = async () => {
        try {
            const response = await AuthenticationService.logout(AuthenticationService.getUserName());
            if (response.status === 200) {
                AuthenticationService.removeUser();
                document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                history.push("/");
            }
        } catch (ex) {
            console.log(ex);
        } finally {

        }
    }

    const loadContacts = async () => {
        try {
            const response = await UserService.getContactUsers(AuthenticationService.getUserId());
            if (response.status === 200) {
                if (mounted.current) {
                    console.log(response)
                    setContacts(response.data);
                }
            }
        } catch (ex) {
            console.log(ex)
        }
    }

    function useScriptMenu() {
        if (!activeMenu) {
            const varIdDrop = document.getElementById("drop-down-menu").style;
            varIdDrop.display = "inline-block";
            varIdDrop.position = "absolute";
            varIdDrop.top = `${inputRef.current.offsetTop + 35}px`;
            varIdDrop.left = `${inputRef.current.offsetLeft - 10}px`;
            setActiveMenu(true);
        } else {
            document.getElementById("drop-down-menu").style.display = "none";
            setActiveMenu(false);
        }
    }

    const clickHandler = (e, roomId) => {
        setSelectedRoom(roomId);
        // UseScriptMenuListUser();
        history.push("/chat/" + roomId);
    }

    const UseScriptMenuListUser = () => {
        if (active) {
            document.getElementById("list_user").style.width = "0";
            setActive(false);
        } else {
            document.getElementById("list_user").style.width = "100vw";
            setActive(true);
        }
    }

    const focusHandler = (e) => {
        setIsFocus(true);
    }

    const blurHandler = e => {
        setIsFocus(false);
    }

    const changeHandler = e => {
        // setText(e.target.value);
        if (e.target.value.trim() !== '') {
            loadSearch(e.target.value.trim())
        } else {
            setSearchUser([])
        }
    }

    const loadContent = (contact) => {
        if (contact.chatMessages !== null && contact.chatMessages !== undefined && contact.chatMessages.length > 0) {
            let lastedMessage = null;
            let max = 0;
            let content = "";
            for (let message of contact.chatMessages) {
                let time = new Date(message.sendTime).getTime()
                if (time > max) {
                    max = time;
                    content = message.content;
                }
            }
            // const content = contact.chatMessages[0] && contact.chatMessages[0].content;
            if (content !== undefined) {
                return content && content.length < 10 ? content : (content.substring(0, 10) + "...")
            }
            return null;
        }
        return null;
    }

    const getName = (contact) => {
        if (contact.roomName === undefined || contact.roomName === null) {
            return false;
        }
        let name = null;
        if (contact.roomName === "") {
            const roomName = contact.participants && contact.participants.filter(item => item.userId !== AuthenticationService.getUserId()).map(item => item.name).join(" và ")
            name = roomName;
        } else {
            name = contact.roomName;
        }

        if (name !== null && name !== undefined) {
            return name && name.length < 10 ? name : (name.substring(0, 10) + "...")
        }
    }

    const loadSearch = async (search) => {
        try {
            const response = await AuthenticationService.getSearch(search);
            if (response.status === 200) {
                setSearchUser(response.data);
            }
        } catch (ex) {
            setSearchUser([])
        }
    }

    return (
        <Fragment>
            <div className="user_online_box">
                <div className="header-user">
                    <div className="user-avatar">
                        <img src={AuthenticationService.getAvatar() || (AuthenticationService.isMale() ? MaleAvatar : FemaleAvatar)} alt="user" width="50" className="avatar" />
                        <div className="app-title">Chat</div>
                    </div>
                    <div className="user-features">
                        <div className="icon icon-drop pointer" onClick={useScriptMenu}
                            ref={inputRef}
                        >
                            <img src={DropDown} alt="Dropdown" />
                        </div>
                        <div className="icon icon-video pointer">
                            <img src={VideoPlus} alt="Video" />
                        </div>
                        <div className="icon icon-plus pointer" onClick={e => history.push('/create/chat')}>
                            <img src={Plus} alt="Add" />
                        </div>
                        <div className="icon icon-menu pointer" onClick={UseScriptMenuListUser} >
                            <img src={Menu} alt="Menu" />
                        </div>
                        <div style={{ 'display': activeMenu ? 'block' : 'none' }} className="drop-down-menu" id="drop-down-menu" onClick={useScriptMenu} onMouseLeave={useScriptMenu}>
                            <ul className="list-menu">
                                <li className="menu-pointer"><i className="user-name fa fa fa-user fa-2x"></i><div className="user-name-info">{JSON.parse(localStorage.getItem("account")).name}</div></li>
                                <li className="menu-pointer" onClick={logout}><i className="logout fa fa-sign-out fa-2x" ></i><div className="text-logout">Logout</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="list_user_box" id="list_user">
                    <div className="icon-close"><img src={Close} alt="close" onClick={UseScriptMenuListUser} /></div>
                    <div className="text-search">
                        <form className="form-search">
                            <div className="message_input_wrapper">
                                <input onFocus={focusHandler} onBlur={blurHandler} onChange={changeHandler} type="text" className="message_input" placeholder="Tìm kiếm trên Messenger" />
                            </div>
                        </form>
                    </div>
                    {isFocus ? <div style={{ 'width': '100%' }}>
                        {searchUser.length === 0 ? <div className="loading">
                            <img src={Loading} className="loading-img" alt="Loading" width="10%" />
                        </div> : <div style={{ 'width': '100%' }}>
                            {searchUser.map((user, index) => {
                                return <div className="list-group-item" key={index} onClick>
                                    <div className="media">
                                        <img src={user.roomAvt || MaleAvatar} alt="user" className="avatar" />
                                        <div className="media-body">
                                            <div className="subtitle">
                                                {user.name}
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <button style={{'width': '50%', 'float': 'right'}} className="btn btn-primary">
                                                    Nhắn tin
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>}
                    </div> : <Fragment>
                        {contacts.length === 0 ? <p style={{ textAlign: 'center', fontFamily: "'Arsenal', sans-serif", color: 'grey', fontSize: '1rem', marginTop: '50%' }}>Dont' have room</p> : <div>
                            {contacts.map((contact, index) => {
                                return <div className={`list-group-item ${selectedRoom === contact.roomId ? 'active' : ''}`} key={index} onClick={e => clickHandler(e, contact.roomId)}>
                                    <div className="media">
                                        <img src={contact.roomAvt || MaleAvatar} alt="user" className="avatar" />
                                        <div className="media-body">
                                            <div className="subtitle">
                                                {getName(contact)}
                                            </div>
                                            <div className="content">
                                                {loadContent(contact) !== "(y)" ? loadContent(contact) :
                                                    <img src={Like} alt="Like" />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>}
                    </Fragment>}
                </div>
            </div>
        </Fragment>
    );
}

export default Drawer;