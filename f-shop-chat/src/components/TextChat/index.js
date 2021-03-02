import React from 'react';
import TextField from '../TextField/index';
import '../TextChat/style.css';

function TextChat() {
    return (
        <div class="bottom_wrapper">
            <form action="#" class="form" >
                <TextField />
                <div class="send_message" >
                    <div class="icon"><button type="submit" class="btn-send"><i class="fa fa-paper-plane fa-2x"></i></button></div>
                </div>
            </form>
        </div>
    );
}

export default TextChat;