import React, { useState, useEffect } from 'react';
import '../Drawer/style.css'



function Drawer() {
    const [active, setActive] = useState(false);
    const [dimmensions, setDimmensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

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
                    <div className="icon icon-drop"><a href="#"><i className="fa fa-caret-down fa-2x"></i></a></div>
                    <div className="icon icon-video"><a href="#"><span className="iconify" data-icon="mdi-video-plus" data-inline="false"></span></a></div>
                    <div className="icon icon-plus"><a href="#"><i className="fa fa-plus-square fa-2x"></i></a></div>
                    <div className="icon icon-menu"><a href="javascript:void(0)" onClick={useScriptMenu}><i className="fa fa-bars fa-2x"></i></a></div>
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