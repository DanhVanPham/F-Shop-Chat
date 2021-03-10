import React, { useState, useEffect, useRef, Fragment } from 'react';
import { useHistory } from 'react-router';
import AuthenticationService from '../../services/AuthenticationService';
import UserService from '../../services/UserService';
import './style.css';
import Account from '../../assets/account.svg';
import Close from '../../assets/close.png';
import Menu from '../../assets/menu.png'
import Plus from '../../assets/plus.png'
import VideoPlus from '../../assets/video-plus.png';
import DropDown from '../../assets/menu-down.png';

function Drawer() {
    const history = useHistory();
    const [active, setActive] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const [dimmensions, setDimmensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    const [loading, setLoading] = useState(false);
    const mounted = useRef(false);
    const [contacts, setContacts] = useState([]);
    const inputRef = useRef();

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
            if (mounted.current) {
                setLoading(true);
            }
            const response = await UserService.getContactUsers(AuthenticationService.getUserId());
            if (response.status === 200) {
                if (mounted.current) {
                    setContacts(response.data);
                }
            }
        } catch (ex) {
            console.log(ex)
        } finally {
            if (mounted.current) {
                setLoading(false);
            }
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

    const useScriptMenuListUser = () => {
        if (active) {
            document.getElementById("list_user").style.width = "0";
            setActive(false);
        } else {
            document.getElementById("list_user").style.width = "100vw";
            setActive(true);
        }
    }

    useEffect(() => {
        mounted.current = true;
        loadContacts();
        return () => { mounted.current = false }
    }, [])

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

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <Fragment>
            <div className="user_online_box">
                <div className="header-user">
                    <div className="user-avatar">
                        <img src={Account} alt="user" width="50" className="avatar" />
                        <div className="app-title">Chat</div>
                    </div>
                    <div className="user-features">
                        <div className="icon icon-drop pointer" onClick={useScriptMenu} onLoad={useScriptMenu}
                            ref={inputRef}
                        >
                            <img src={DropDown} alt="Dropdown" />
                        </div>
                        <div className="icon icon-video pointer">
                            <img src={VideoPlus} alt="Video" />
                        </div>
                        <div className="icon icon-plus pointer">
                            <img src={Plus} alt="Add" />
                        </div>
                        <div className="icon icon-menu pointer" onClick={useScriptMenuListUser} >
                            <img src={Menu} alt="Menu" />
                        </div>
                        <div className="drop-down-menu" id="drop-down-menu" onClick={useScriptMenu} onMouseLeave={useScriptMenu}>
                            <ul className="list-menu">
                                <li className="menu-pointer"><i className="user-name fa fa fa-user fa-2x"></i><div className="user-name-info">{JSON.parse(localStorage.getItem("account")).name}</div></li>
                                <li className="menu-pointer" onClick={logout}><i className="logout fa fa-sign-out fa-2x" ></i><div className="text-logout">Logout</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="list_user_box" id="list_user">
                    <div className="icon-close"><img src={Close} alt="close" onClick={useScriptMenuListUser} /></div>
                    <div className="text-search">
                        <form action="#">
                            <div className="message_input_wrapper">
                                <input type="text" className="message_input" placeholder="Tìm kiếm trên Messenger" />
                            </div>
                        </form>
                    </div>
                    {contacts.length === 0 ? <p style={{ textAlign: 'center', color: 'red', fontSize: '2rem', marginTop: '40%' }}>Dont' have room</p> : <div>
                        {contacts.map((contact, index) => {
                            return <div className="list-group-item" key={index}>
                                <div className="media">
                                    <img src={Account} alt="user" className="avatar" />
                                    <div className="media-body">
                                        <div className="subtitle">
                                            Thanh Bình
                                        </div>
                                        <div className="content">Đi chơi nào</div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>}
                </div>
            </div>
        </Fragment>
    );
}

export default Drawer;