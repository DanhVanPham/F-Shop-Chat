import React, { Fragment } from 'react';
import Message from '../MessageItem/index';
import './style.css';

function MessageList({chatMessages}) {
    return (
        <div className="messages">
            {chatMessages && chatMessages.map((message, index) => {
                return <Fragment key={index}>
                    <Message message={message} />
                </Fragment>
            })}
        </div>
    );
}

export default MessageList;