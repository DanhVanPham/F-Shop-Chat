import React, { Fragment } from 'react';
import Message from '../MessageItem/index';
import './style.css';

function MessageList({chatMessages}) {
    return (
        <ul className="messages">
            {chatMessages && chatMessages.map((message, index) => {
                return <Fragment key={index}>
                    <Message message={message} />
                </Fragment>
            })}
        </ul>
    );
}

export default MessageList;