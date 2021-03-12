import React from 'react';
import './style.css';

function TextChat(props) {
    return (
        <div className="bottom_wrapper">
            <div className="text_field_wrapper">
            <input value={props.value} onChange={props.onChange} type="text" className="message_input" placeholder="Type a message" />
            </div>
            <div className="icon_wrapper" >
                <div className="icon"><button type="submit" className="btn-send"><i className="fa fa-paper-plane fa-2x"></i></button></div>
            </div>
        </div>
    );
}

export default TextChat;