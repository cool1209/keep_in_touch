import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Message.module.scss';

const Message = ({ message, authUser }) => {
  const isAuthUser = message.authorId === authUser.id;

  return (
    <article className={
      classNames(
        styles.message, 
        {[styles.message_isAuthUser]: isAuthUser}
      )}
    >
      <NavLink to={`/profile/${message.authorId}`}>
        <img 
          src={message.authorAvatar} 
          alt='User avatar' 
          className={styles.message__author}
        />
      </NavLink>

      <div 
        className={
          classNames(
            styles.message__text,
            {[styles.message__text_isAuthUser]: isAuthUser}
        )}
      >
        {message.message}
      </div>
    </article>
  );
};

export default Message;
