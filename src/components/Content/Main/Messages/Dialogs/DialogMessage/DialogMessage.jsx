import React from 'react';
import classNames from 'classnames';
import styles from './DialogMessage.module.css';

const DialogMessage = ({ message, user }) => {
  const isCurrentUser = message.member === user.name;

  return (
    <li className={
      classNames(
        styles.message, 
        {[styles.message_currentUser]: isCurrentUser}
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
            {[styles.message__text_currentUser]: isCurrentUser}
        )}
      >
        {message.message}
      </div>
    </li>
  );
};

export default DialogMessage;
