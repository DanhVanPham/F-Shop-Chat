import React from 'react';
import PropTypes from 'prop-types';
import Input from './components/input';
import MessageList from './components/message-list';
import UserBox from './components/user-online';
import './Chat.css';

Chat.propTypes = {
    user: PropTypes.bool,
};

function Chat() {
    return (
        <div class="app_content">
            <header class="text-center">
                <h1 class="text-center-h1">Chat box</h1>
            </header>
            <div class="chat_window">
                <UserBox />
                <div class="chat_window_right">
                    <MessageList user={true} />
                    <Input />
                </div>
            </div>
        </div>
    );
}

export default Chat;