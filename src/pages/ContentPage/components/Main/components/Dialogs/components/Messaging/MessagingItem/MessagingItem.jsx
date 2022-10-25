import React from 'react';
import Message from './Message/Message';
import MessagingItemStyles from './MessagingItemStyles.module.css';

const MessagingItem = ({
  dialog,
  authUser,
  newMessageText,
  updateMessageText,
  sendMessage
}) => {
  
  return (
    <li className={MessagingItemStyles.wrapper}>
      <ul className={MessagingItemStyles.dialogMessages}>
        {dialog.messages.map(message => (
          <Message 
            message={message}
            authUser={authUser}
            key={message.id}
          />
        )).reverse()}
      </ul>

      <div className={MessagingItemStyles.sendMessage}>
        <input
          type="text"
          className={MessagingItemStyles.input}
          onChange={(e) => updateMessageText(e.target.value)}
          placeholder="New message..."
          value={newMessageText}
        />
        <button
          className={MessagingItemStyles.btn}
          onClick={() => sendMessage(dialog.id, authUser)}
        >Send</button>
      </div>
  </li>
  );
};

export default MessagingItem;
