import React from 'react';
import classNames from 'classnames';
import styles from './Message.module.css';
import { NavLink } from 'react-router-dom';

const Message = ({ message, authUser }) => {
  const loginUser = message.authorId === authUser.id;

  return (
    <article className={
      classNames(
        styles.wrapper, 
        {[styles.wrapper_loginUser]: loginUser}
      )}
    >
      <NavLink to={`/profile/${message.authorId}`}>
        <img 
          src={message.authorAvatar} 
          alt='User avatar' 
          className={styles.authorAvatar}
        />
      </NavLink>

      <div 
        className={
          classNames(
            styles.text,
            {[styles.text_loginUser]: loginUser}
        )}
      >
        {message.message}
      </div>
    </article>
  );
};

export default Message;
