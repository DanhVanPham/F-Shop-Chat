import React from 'react';
import AuthenticationService from '../../services/AuthenticationService';
import './style.css';

function MessageItem({message}) {
    return (
        <li className={message.participant.userId === AuthenticationService.getUserId() ? "message right" : "message left"}>
            <div className="avatar"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="36" height="36" /></div>
            <div className="text-wrapper">
                {message.content}
            </div>
            {/* <small className="small-date">12:00 PM | Aug 13</small> */}
        </li>
    );
}

export default MessageItem;