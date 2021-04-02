import React, { Fragment } from 'react';
import AuthenticationService from '../../services/AuthenticationService';
import DateTimeService from '../../utils/DateTimeService';
import './style.css';
import Like from '../../assets/like.png';

function MessageItem({ message, displayDateHandler, selectedId }) {
    const isMySelf = message.participant.userId === AuthenticationService.getUserId();

    return (
        <Fragment>
            {selectedId !== undefined && selectedId === message.messageId ? <div className="small-date-wrapper newItem">
                <small className="small-date">{DateTimeService.convert(message.sendTime)}</small>
            </div> : null}
            <div className="message-wrapper">
                <div onClick={e => displayDateHandler(e, message.messageId)} className={isMySelf ? "message-right" : "message-left"}>
                    {isMySelf ? null : <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="30" height="30" />}
                    {message.content.trim() !== '(y)' ? <div className={`text-wrapper ${isMySelf ? 'right' : 'left'}`}>
                        <div className="text">
                            {message.content}
                        </div>
                    </div> : <div className={`icon ${isMySelf ? 'right' : 'left'}`}>
                        <img style={{'color': 'blue'}} src={Like} alt="Like" />
                    </div>}
                </div>
            </div>
        </Fragment>
    );
}

export default MessageItem;