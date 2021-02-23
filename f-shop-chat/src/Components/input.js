import React from 'react';
// import PropTypes from 'prop-types';

function Input() {
    return (
        <div class="bottom_wrapper">
            <form action="#">
                <div class="message_input_wrapper">
                    <input type="text" class="message_input" placeholder="Type a message" />
                </div>
                <div class="send_message" >
                    <div class="icon"><i class="fa fa-paper-plane fa-2x"></i></div>
                </div>
            </form>
        </div>
    );
}

export default Input;