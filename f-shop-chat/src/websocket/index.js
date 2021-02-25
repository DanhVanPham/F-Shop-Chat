import React, { createRef } from 'react';
import SockJsClient from 'react-stomp';

const SOCKET_URL = "http://localhost:8080/websocket-chat/";
export const WebSocketClient = (props) => {
    const clientRef = createRef();
    
    return <SockJsClient
        url={SOCKET_URL}
        topics={['/topic/user']}
        onConnect={() => console.log("connected!")}
        onDisconnect={() => {
            console.log("Disconnected");
        }}
        onMessage={
            (msg) => props.onMessageReceived(msg)
        }
        debug={false}
        ref={(client) => {
            clientRef = client;
        }}
    />
}