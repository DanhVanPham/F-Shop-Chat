import React from 'react';
import '../ChatBox/style.css';
import MessageList from '../MessageList/index';
import PropTypes from 'prop-types';
import Input from '../TextChat/index';

ChatBox.propTypes = {
    user: PropTypes.bool,
};

function ChatBox() {
    return (
        <div class="chat-box">
            <div class="chat-box-header">
                <div class="user-icon"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" class="avatar" /></div>
                <div class="user-name">Jasoe Doe</div>
            </div>
            <div class="chat-box-message">
                <MessageList user={true} />
            </div>
            <div class="chat-box-input">
                <Input />
            </div>
        </div>
    );
}

export default ChatBox;