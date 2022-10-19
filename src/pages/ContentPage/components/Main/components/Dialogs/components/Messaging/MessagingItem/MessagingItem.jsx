import React from 'react';
import Message from './Message/Message';
import MessagingItemStyles from './MessagingItemStyles.module.css';

const MessagingItem = ({
  dialog,
  user,
  newMessageText,
  onUpdateText,
  onSendMessage
}) => {
  
  return (
    <li className={MessagingItemStyles.wrapper}>
      <ul className={MessagingItemStyles.dialogMessages}>
        {dialog.messages.map(message => (
          <Message 
            message={message}
            user={user}
            key={message.id}
          />
        ))}
      </ul>

      <div className={MessagingItemStyles.sendMessage}>
        <input
          type="text"
          className={MessagingItemStyles.input}
          onChange={(e) => onUpdateText(e.target.value)}
          placeholder="New message..."
          value={newMessageText}
        />
        <button
          className={MessagingItemStyles.btn}
          onClick={() => onSendMessage(dialog.id, user)}
        >Send</button>
      </div>
  </li>
  );
};

export default MessagingItem;
