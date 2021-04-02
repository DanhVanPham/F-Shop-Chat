import React, { Fragment, useState } from 'react';
import Message from '../MessageItem/index';
import './style.css';

function MessageList({ chatMessages }) {
    const [selectedId, setSelectedId] = useState(undefined);

    const displayDateHandler = (e, id) => {
        console.log(id);
        console.log(selectedId)
        if (selectedId === undefined || selectedId !== id) {
            setSelectedId(id);
        } else {
            setSelectedId(undefined);
        }
    }

    return (
        <div className="messages">
            {chatMessages && chatMessages.map((message, index) => {
                return <Fragment key={index}>
                    <Message message={message} displayDateHandler={displayDateHandler} selectedId={selectedId} />
                </Fragment>
            })}
        </div>
    );
}

export default MessageList;