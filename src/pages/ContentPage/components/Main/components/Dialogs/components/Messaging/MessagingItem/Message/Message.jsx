import React from 'react';
import classNames from 'classnames';
import MessageStyles from './Message.module.css';
import { NavLink } from 'react-router-dom';

const Message = ({ message, user }) => {
  const loginUser = message.authorId === user.id;

  return (
    <article className={
      classNames(
        MessageStyles.wrapper, 
        {[MessageStyles.wrapper_loginUser]: loginUser}
      )}
    >
      <NavLink to={`/profile/${message.authorId}`}>
        <img 
          src={message.authorAvatar} 
          alt='User avatar' 
          className={MessageStyles.authorAvatar}
        />
      </NavLink>

      <div 
        className={
          classNames(
            MessageStyles.text,
            {[MessageStyles.text_loginUser]: loginUser}
        )}
      >
        {message.message}
      </div>
    </article>
  );
};

export default Message;
