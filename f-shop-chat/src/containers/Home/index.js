import React from 'react';
import Drawer from '../../components/Drawer/index';
import ChatBox from '../../components/ChatBox/index';
// import Input from '../../components/TextField/index';
import '../Home/style.css';

function Home() {
    return (
        <div class="chat_window">
            <div class="chat_window_left">
                <Drawer />
            </div>
            <div class="chat_window_middle">
                <ChatBox />
            </div>
        </div>
    );
}

export default Home;