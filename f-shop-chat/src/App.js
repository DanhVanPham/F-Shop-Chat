import React, { createRef, useState } from 'react';
import SockJsClient from 'react-stomp';
import './index.css';
import Chat from './Chat'

const SOCKET_URL = "http://localhost:8080/websocket_chat/";

function App() {
  let clientRef = createRef(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const onMessageReceived = (msg, topic) => {
    console.log(topic)
    messages.push(msg);
    setMessages(preState => [...messages]);
  }
  const submitHandler = e => {
    clientRef.sendMessage('/app_chat/user_all', JSON.stringify({
      name: "cc",
      content: message
  }));
  }

  return (
    <div className="App">
      <div>cc</div>
      {messages.map((msg, index) => {
        return <div key={index}>
          <h6>{msg.name}</h6>
          <p>{msg.content}</p>
        </div>
      })}
        <input value={message} onChange={e => setMessage(prevState => e.target.value)} />
        <button onClick={submitHandler}>Send</button>
      <SockJsClient
        url={SOCKET_URL}
        topics={['/topic/user']}
        onConnect={() => console.log("connected!")}
        onDisconnect={() => {
          console.log("Disconnected");
        }}
        onMessage={
          (msg, topic) => onMessageReceived(msg, topic)
        }
        debug={false}
        ref={(client) => {
          clientRef = client;
        }}
      />
    </div>
  );
  // return <Chat />
}

export default App;
