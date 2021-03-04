import React from 'react';
import './style.css';
import MessageList from '../MessageList/index';
import PropTypes from 'prop-types';
import Input from '../TextChat/index';

ChatBox.propTypes = {
    user: PropTypes.bool,
};

function ChatBox() {
    return (
        <div className="chat-box">
            <div className="chat-box-header">
                <div className="user-icon"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" /></div>
                <div className="user-name">Jasoe Doe</div>
            </div>
            <div className="chat-box-message">
                <MessageList user={true} />
            </div>
            <div className="chat-box-input">
                <Input />
            </div>
        </div>
    );
}

export default ChatBox;