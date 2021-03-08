import React from 'react';
import './style.css';

function TextField({value, onChange}) {
    return (
        <div className="message_input_wrapper">
            <input value={value} onChange={onChange} type="text" className="message_input" placeholder="Type a message" />
        </div>
    )
}

export default TextField;