import React from 'react';
import SockJsClient from 'react-stomp';

const SOCKET_URL = "http://localhost:8080/websocket-chat/";
export const WebSocket = ({onMessageReceived}) => {
    return <SockJsClient
        url={SOCKET_URL}
        topics={['/topic/user']}
        onConnect={() => console.log("connected!")}
        onDisconnect={() => {
            console.log("Disconnected");
        }}
        onMessage={
            (msg) => onMessageReceived(msg)
        }
        debug={false}
    />
}