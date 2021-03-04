import React from 'react';
import TextField from '../TextField/index';
import './style.css';

function TextChat() {
    return (
        <div className="bottom_wrapper">
            <form action="#" className="form" >
                <TextField />
                <div className="send_message" >
                    <div className="icon"><button type="submit" className="btn-send"><i className="fa fa-paper-plane fa-2x"></i></button></div>
                </div>
            </form>
        </div>
    );
}

export default TextChat;