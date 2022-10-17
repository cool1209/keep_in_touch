import React from 'react';
import classNames from 'classnames';
import MessageStyles from './Message.module.css';

const Message = ({ message, user }) => {
  const loginUser = message.authorId === user.id;

  return (
    <article className={
      classNames(
        MessageStyles.wrapper, 
        {[MessageStyles.wrapper_loginUser]: loginUser}
      )}
    >
      <img 
        src={message.authorAvatar} 
        alt='User avatar' 
        className={MessageStyles.authorAvatar}
      />

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
