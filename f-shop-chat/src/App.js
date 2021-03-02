import React, { createRef, useState } from 'react';
// import SockJsClient from 'react-stomp';
import './index.css';
import Chat from './containers/Home/index';
import Login from './containers/Login/index.js';
import PropTypes from 'prop-types';

const SOCKET_URL = "http://localhost:8080/websocket_chat/";

function App() {
  //   let clientRef = createRef(null);
  //   const [messages, setMessages] = useState([]);
  //   const [message, setMessage] = useState("");
  //   const onMessageReceived = (msg, topic) => {
  //     console.log(topic)
  //     messages.push(msg);
  //     setMessages(preState => [...messages]);
  //   }
  //   const submitHandler = e => {
  //     clientRef.sendMessage('/app_chat/user_all', JSON.stringify({
  //       name: "cc",
  //       content: message
  //     }));
  //   }
  const [user, setUser] = useState("");
  const callBack = (value) => {
    setUser(value);
  }
  return (
    <div className="App">
      {user === "" ? <Login function={callBack} /> : <Chat />}
    </div>
  );
  // return <Chat />
}

export default App;
