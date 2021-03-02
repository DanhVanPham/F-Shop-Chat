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
        <div class="user_online_box">
            <div class="header-user">
                <div class="user-avatar">
                    <img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" />
                    <div class="app-title">Chat</div>
                </div>
                <div class="user-features">
                    <div class="icon icon-drop"><a href="#"><i class="fa fa-caret-down fa-2x"></i></a></div>
                    <div class="icon icon-video"><a href="#"><span class="iconify" data-icon="mdi-video-plus" data-inline="false"></span></a></div>
                    <div class="icon icon-plus"><a href="#"><i class="fa fa-plus-square fa-2x"></i></a></div>
                    <div class="icon icon-menu"><a href="javascript:void(0)" onClick={useScriptMenu}><i class="fa fa-bars fa-2x"></i></a></div>
                </div>
                <div class="text-search">
                    <form action="#">
                        <div class="message_input_wrapper">
                            <input type="text" class="message_input" placeholder="Tìm kiếm trên Messenger" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="list_user_box" id="list_user">
                <div class="icon-close"><a href="javascript:void(0)" class="link-close" onClick={useScriptMenu}>X</a></div>
                <a class="list-group-item active" href="#">
                    <div class="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="#">
                    <div class="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="#">
                    <div class="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="#">
                    <div class="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="#">
                    <div class="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="#">
                    <div class="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="#">
                    <div class="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="#">
                    <div class="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="#">
                    <div class="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="#">
                    <div class="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="#">
                    <div class="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="#">
                    <div class="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="#">
                    <div class="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="#">
                    <div class="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="#">
                    <div class="media"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="#">
                    <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="#">
                    <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="avatar" />
                        <div class="media-body">
                            <div class="media-title">
                                <h6 class="user-name">Jason Doe</h6><small class="date">25 Dec</small>
                            </div>
                            <p class="newest_messages">Hello, What your name?</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Drawer;