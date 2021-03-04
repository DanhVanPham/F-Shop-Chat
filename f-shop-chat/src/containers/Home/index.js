import React from 'react';
import Drawer from '../../components/Drawer/index';
import '../Home/style.css';

function Home(props) {
    return (
        <div className="chat_window">
            <div className="chat_window_left">
                <Drawer />
            </div>
            <div className="chat_window_middle">
                {props.children}
            </div>
        </div>
    );
}

export default Home;