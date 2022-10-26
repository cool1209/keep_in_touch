import React from 'react';
import styles from './MessagingItemStyles.module.css';
import Message from './Message/Message';

const MessagingItem = ({
  authUser,
  dialog,
  newMessageText,
  onUpdateMessageText,
  onSendMessage
}) => {

  return (
    <li className={styles.wrapper}>
      <ul className={styles.dialogMessages}>
        {dialog.messages.map(message => (
          <Message 
            authUser={authUser}
            message={message}
            key={message.id}
          />
        )).reverse()}
      </ul>

      <div className={styles.sendMessage}>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => onUpdateMessageText(e.target.value)}
          placeholder="New message..."
          value={newMessageText}
        />
        <button
          className={styles.btn}
          onClick={onSendMessage}
        >Send</button>
      </div>
  </li>
  );
};

export default MessagingItem;
