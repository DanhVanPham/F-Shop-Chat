import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import MessageList from '../MessageList/index';
import PropTypes from 'prop-types';
import Input from '../TextChat/index';
import { useLocation } from 'react-router';
import RoomService from '../../services/RoomService';
ChatBox.propTypes = {
  user: PropTypes.bool,
};

var stompClient = null;
function ChatBox() {

  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState(undefined);
  const [text, setText] = useState("");
  const currentUser = JSON.parse(localStorage.getItem("account"));
  const location = useLocation();
  const [room, setRoom] = useState(undefined);
  const [chatRoomId, setChatRoomId] = useState(location.pathname.substring(location.pathname.lastIndexOf("/") + 1));

  const messagesRef = useRef(null);


  useEffect(() => {
    connect();
    getRoom();
  }, []);

  useEffect(() => {
    if (messagesRef) {
      messagesRef.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  useEffect(() => {
    if (newMessage === undefined) return;
    getRoom();
  }, [newMessage])

  const getRoom = async () => {
    try {
      setLoading(true);
      const response = await RoomService.getRoom(chatRoomId);
      if (response.status === 200) {
        setRoom(response.data);
      }
    } catch (ex) {
      console.log(ex);
    } finally {
      setLoading(false);
    }
  }

  const handleLike = (e) => {
    sendMessage(e, '(y)');
  }

  const connect = () => {
    const Stomp = require("stompjs");
    var SockJS = require("sockjs-client");
    SockJS = new SockJS("http://localhost:9090/ws");
    stompClient = Stomp.over(SockJS);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    stompClient.subscribe(
      "/room/" + location.pathname.substring(location.pathname.lastIndexOf("/") + 1) + "/queue/messages",
      onMessageReceived
    );
  };

  const onError = (err) => {
    console.log(err);
  };

  const onMessageReceived = (msg) => {
    if (msg.body) {
      setNewMessage(msg.body);
    }
  };

  const sendMessage = (e, msg) => {
    e.preventDefault();
    if (msg.trim() !== "") {
      const message = {
        chatRoomId: location.pathname.substring(location.pathname.lastIndexOf("/") + 1),
        senderId: room.participants.find(participant => participant.userId === currentUser.userId).participantId,
        content: msg,
        sendTime: new Date(),
      };
      stompClient.send("/app/chat", {}, JSON.stringify(message));
      setText("");
    }
    getRoom();
  };

  return (
    <div className="chat-box">
      <div className="chat-box-header">
        <img src="https://s2.linkimage.com/images/062/62200/preview_73331.jpg" alt="user" className="avatar" />
        <h6>{room && room.roomName}</h6>
      </div>
      <div className="chat-box-message" ref={messagesRef}>
        <MessageList chatMessages={room && room.chatMessages} />
      </div>
      <div>
        <form className="chat-box-input" onSubmit={e => sendMessage(e, text)}>
          <Input onSubmit={e => sendMessage(e, text)} handleLike={handleLike} value={text} onChange={e => setText(e.target.value)} />
        </form>
      </div>
    </div>
  );
}

export default ChatBox;