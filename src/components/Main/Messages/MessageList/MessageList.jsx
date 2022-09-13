import React from 'react';
import Message from './Message/Message';
import styles from './MessageList.module.css';

const MessageList = ({ messages }) => {
  return (
    <ul className={styles.messageList}>
      {messages.map(message => (
        <Message
          key={message.id}
          avatar={message.messageAva}
          name={message.messageUser}
          message={message.message}
        />
      ))}
    </ul>
  );
};

export default MessageList;
