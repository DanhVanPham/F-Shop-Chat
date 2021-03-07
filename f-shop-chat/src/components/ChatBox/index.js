import React, { useEffect, useState } from 'react';
import './style.css';
import MessageList from '../MessageList/index';
import PropTypes from 'prop-types';
import Input from '../TextChat/index';

ChatBox.propTypes = {
    user: PropTypes.bool,
};

var stompClient = null;
function ChatBox() {
    const user = JSON.parse(localStorage && localStorage.getItem("account"));
    const [message, setMessage] = useState()
    useEffect(() => {
    }, [])

    const connect = () => {
        const Stomp = require('stompjs');
        var SockJs = require('sockjs-client');
        SockJs = new SockJs("http://localhost:9090/ws");
        stompClient = Stomp.over(SockJs);
        stompClient.connect({}, onConnected, onError);
    }

    const onConnected = () => {
        console.log("connected");
        // stompClient.subscribe(
        //     "/user/" + currentUser.id + "/queue/messages",
        //     onMessageReceived
        // );
        stompClient.subcribe(`/user/${1}/queue/messages`)
    };

    const onError = (err) => {
        console.log(err);
    };

    const onMessageReceived = () => {

    }
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