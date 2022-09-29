import React from 'react';
import Message from './Message/Message';
import styles from './Messages.module.css';

const Messages = ({ dialog, user }) => {
  console.log(dialog.id);
  return (
    <ul className={styles.messages}>
        {dialog.messages.map(message => (
          <Message 
            user={user}
            key={message.id}
            message={message}
          />
        ))}
    </ul>
  );
};

export default Messages;
