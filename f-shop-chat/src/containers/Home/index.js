import React from 'react';
import Drawer from '../../components/Drawer/index';
import ChatBox from '../../components/ChatBox/index';
import '../Home/style.css';

function Home() {
    return (
        <div className="chat_window">
            <div className="chat_window_left">
                <Drawer />
            </div>
            <div className="chat_window_middle">
                <ChatBox />
            </div>
        </div>
    );
}

export default Home;