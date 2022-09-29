import React from 'react';
import classNames from 'classnames';
import styles from './Message.module.css';

const Message = ({ message, user }) => {
  const isUser = message.member === user.name;
  
  return (
    <li className={
      classNames(
        styles.message, 
        {[styles.message_user]: isUser}
      )}
    >
      <img 
        src={message.memberAvatar} 
        alt='User avatar' 
        className={styles.message__memberAvatar}
      />

      <div 
        className={
          classNames(
            styles.message__text,
            {[styles.message__text_user]: isUser}
        )}
      >
        {message.message}
      </div>
    </li>
  );
};

export default Message;
