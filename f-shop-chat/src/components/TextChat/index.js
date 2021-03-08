import React from 'react';
import TextField from '../TextField/index';
import './style.css';

function TextChat(props) {
    return (
        <div className="bottom_wrapper">
            <div className="form" >
                <TextField {...props}/>
                <div className="send_message" >
                    <div className="icon"><button type="submit" className="btn-send"><i className="fa fa-paper-plane fa-2x"></i></button></div>
                </div>
            </div>
        </div>
    );
}

export default TextChat;