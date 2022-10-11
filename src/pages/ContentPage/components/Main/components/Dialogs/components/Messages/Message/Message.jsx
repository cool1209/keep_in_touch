import React from 'react';
import classNames from 'classnames';
import styles from './Message.module.css';

const Message = ({ message, user }) => {
  const loginUser = message.authorId === user.id;

  return (
    <article className={
      classNames(
        styles.message, 
        {[styles.message_loginUser]: loginUser}
      )}
    >
      <img 
        src={message.authorAvatar} 
        alt='User avatar' 
        className={styles.message__authorAvatar}
      />

      <div 
        className={
          classNames(
            styles.message__text,
            {[styles.message__text_loginUser]: loginUser}
        )}
      >
        {message.message}
      </div>
    </article>
  );
};

export default Message;
