import React from 'react';
import '../TextField/style.css';

function TextField() {
    return (
        <div className="message_input_wrapper">
            <input type="text" className="message_input" placeholder="Type a message" />
        </div>
    )
}

export default TextField;