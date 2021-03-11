import React from 'react';
import AuthenticationService from '../../services/AuthenticationService';
import './style.css';

function MessageItem({ message }) {
    const isMySelf = message.participant.userId === AuthenticationService.getUserId();
    return (
        <div className="message-wrapper">
            <div className={isMySelf ? "message-right" : "message-left"}>
                {isMySelf ? null : <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="30" height="30" />}
                <div className={`text-wrapper ${isMySelf ? 'right': 'left'}`}>
                    <div className="text">
                        {message.content}
                    </div>
                </div>
                {/* <small className="small-date">12:00 PM | Aug 13</small> */}
            </div>
        </div>
    );
}

export default MessageItem;