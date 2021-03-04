import React from 'react';
import './style.css';

function MessageItem(props) {
    return (
        <li className={props.user ? "message right" : "message left"}>
            <div className="avatar"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" /></div>
            <div className="text-wrapper">
                <p className="text">Hello, What your name?I am fine thank you and you. I come from Viet Name</p>
            </div>
            <small className="small-date">12:00 PM | Aug 13</small>
        </li>
    );
}

export default MessageItem;