import React, { useEffect, useState } from 'react';
import './style.css';
import MessageList from '../MessageList/index';
import PropTypes from 'prop-types';
import Input from '../TextChat/index';
import { useLocation } from 'react-router';

ChatBox.propTypes = {
  user: PropTypes.bool,
};

var stompClient = null;
function ChatBox() {
  const [text, setText] = useState("");
  const currentUser = JSON.parse(localStorage.getItem("account"));
  const location = useLocation();

  useEffect(() => {
    connect();
  }, []);

  const connect = () => {
    const Stomp = require("stompjs");
    var SockJS = require("sockjs-client");
    SockJS = new SockJS("http://localhost:9090/ws");
    stompClient = Stomp.over(SockJS);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    // console.log("connected");
    // console.log(currentUser);
    // stompClient.subscribe(
    //   "/user/" + currentUser.userId + "/queue/messages",
    //   onMessageReceived
    // );
  };

  const onError = (err) => {
    console.log(err);
  };

  const onMessageReceived = (msg) => {
    // const notification = JSON.parse(msg.body);
    // const active = JSON.parse(sessionStorage.getItem("recoil-persist"))
    //   .chatActiveContact;

    // if (active.id === notification.senderId) {
    //   findChatMessage(notification.id).then((message) => {
    //     const newMessages = JSON.parse(sessionStorage.getItem("recoil-persist"))
    //       .chatMessages;
    //     newMessages.push(message);
    //     setMessages(newMessages);
    //   });
    // } else {
    //   message.info("Received a new message from " + notification.senderName);
    // }
    // loadContacts();
  };

  const sendMessage = (e, msg) => {
    e.preventDefault();
    console.log(msg);
    if (msg.trim() !== "") {
      const message = {
        chatRoomId: location.pathname.substring(location.pathname.lastIndexOf("/") + 1),
        senderId: currentUser.userId,
        content: msg,
        sendTime: new Date(),
      };
      stompClient.send("/app/chat", {}, JSON.stringify(message));
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-box-header">
        <div className="user-icon"><img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" width="50" className="avatar" /></div>
        <div className="user-name">Jasoe Doe</div>
      </div>
      <div className="chat-box-message">
        <MessageList user={true} />
      </div>
      <div className="chat-box-input">
        <form onSubmit={e => sendMessage(e, text)}>
          <Input value={text} onChange={e => setText(e.target.value)} />
        </form>
      </div>
    </div>
  );
}

export default ChatBox;