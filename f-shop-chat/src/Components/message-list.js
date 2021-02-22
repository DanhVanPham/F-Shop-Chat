import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Components/message-item';



function messageList(props) {
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


        </ul>
    );
}

export default messageList;