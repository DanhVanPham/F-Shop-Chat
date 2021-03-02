import React from 'react';
import Message from '../MessageItem/index';
import '../MessageList/style.css';

function MessageList(props) {
    return (
        <ul class="messages">
            <Message user={false} />
            <Message user={true} />
            <Message user={false} />
            <Message user={true} />
            <Message user={false} />
            <Message user={true} />
            <Message user={false} />
            <Message user={true} />
            <Message user={false} />
            <Message user={true} />
            <Message user={false} />
            <Message user={true} />
            <Message user={false} />
            <Message user={true} />
            <Message user={false} />
            <Message user={true} />
            <Message user={false} />
            <Message user={true} />
            <Message user={false} />
            <Message user={true} />
        </ul>
    );
}

export default MessageList;