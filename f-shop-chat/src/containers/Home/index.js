import React from 'react';
import Drawer from '../../Components/Drawer/index';
import ChatBox from '../../Components/ChatBox/index';
// import Input from '../../components/TextField/index';
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