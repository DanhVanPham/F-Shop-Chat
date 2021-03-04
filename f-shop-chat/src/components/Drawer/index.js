import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import AuthenticationService from '../../services/AuthenticationService';
import UserService from '../../services/UserService';
import './style.css';



function Drawer() {
    const history = useHistory();
    const [active, setActive] = useState(false);
    const [dimmensions, setDimmensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    const mouted = useRef(false);
    // const [contacts, setContacts] = useState([]);

    const logout = async () => {
        try {
            const response = await AuthenticationService.logout(AuthenticationService.getUserName());
            if(response.status === 200){
                AuthenticationService.removeUser();
                document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                history.push("/");
            }
        } catch(ex){
            console.log(ex);
        } finally {

        }
    }

    function useScriptMenu() {
        if (active) {
            document.getElementById("list_user").style.width = "0";
            setActive(false);
        } else {
            document.getElementById("list_user").style.width = "100vw";
            setActive(true);
        }
    }

    useEffect(() => {
        mouted.current = true;
        UserService.getContactUsers(AuthenticationService.getUserName()).then(res => {
            console.log(res);
        })
    }, [])

    useEffect(() => {
        function handleResize() {
            if (dimmensions.width < 1000 && window.innerWidth >= 1000) {
                window.location.reload();
                setDimmensions({ height: window.innerHeight, width: window.innerWidth });
            } else if (dimmensions.width >= 1000 && window.innerWidth < 1000) {
                document.getElementById("list_user").style.width = "0";
                setDimmensions({ height: window.innerHeight, width: window.innerWidth });
            }
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [window.innerWidth]);
    return (
        <div className="user_online_box">
            <div className="header-user">
                <div className="user-avatar">
                    <img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" />
                    <div className="app-title">Chat</div>
                </div>
                <div className="user-features">
                    <div className="icon icon-drop pointer" onClick={logout}><i className="fa fa-caret-down fa-2x"></i></div>
                    <div className="icon icon-video pointer"><span className="iconify" data-icon="mdi-video-plus" data-inline="false"></span></div>
                    <div className="icon icon-plus pointer"><i className="fa fa-plus-square fa-2x"></i></div>
                    <div className="icon icon-menu pointer"  onClick={useScriptMenu}><i className="fa fa-bars fa-2x"></i></div>
                </div>
                <div className="text-search">
                    <form action="#">
                        <div className="message_input_wrapper">
                            <input type="text" className="message_input" placeholder="Tìm kiếm trên Messenger" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="list_user_box" id="list_user">
                <div className="icon-close"><a href="javascript:void(0)" className="link-close" onClick={useScriptMenu}>X</a></div>
                <a className="list-group-item active" href="#">
                    <div className="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a className="list-group-item" href="#">
                    <div className="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a className="list-group-item" href="#">
                    <div className="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a className="list-group-item" href="#">
                    <div className="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a className="list-group-item" href="#">
                    <div className="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a className="list-group-item" href="#">
                    <div className="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a className="list-group-item" href="#">
                    <div className="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a className="list-group-item" href="#">
                    <div className="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a className="list-group-item" href="#">
                    <div className="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a className="list-group-item" href="#">
                    <div className="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a className="list-group-item" href="#">
                    <div className="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a className="list-group-item" href="#">
                    <div className="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a className="list-group-item" href="#">
                    <div className="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a className="list-group-item" href="#">
                    <div className="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a className="list-group-item" href="#">
                    <div className="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a className="list-group-item" href="#">
                    <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a className="list-group-item" href="#">
                    <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="avatar" />
                        <div className="media-body">
                            <div className="media-title">
                                <h6 className="user-name">Jason Doe</h6><small className="date">25 Dec</small>
                            </div>
                            <p className="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Drawer;