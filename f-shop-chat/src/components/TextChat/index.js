import React, { useState } from 'react';
import './style.css';
import Attachment from '../../assets/attachment.png';
import Send from '../../assets/send.png';
import Like from '../../assets/like.png';
function TextChat(props) {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <div className="bottom_wrapper">
            <div className="icon">
                <img src={Attachment} alt="Image" />
            </div>
            <div className="text_field_wrapper">
                <input onFocus={() => setIsFocus(true)} onBlur={e => !props.value && setIsFocus(false)} value={props.value} onChange={props.onChange} className="message_input" placeholder="Type a message" />
            </div>
            <div className="icon">
                <img src={isFocus ? Send : Like} alt="Like" />
            </div>
        </div>
    );
}

export default TextChat;