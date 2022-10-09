import React from 'react';
import classNames from 'classnames';
import s from './Message.module.css';

const Message = ({ message, user }) => {
  const loginUser = message.authorId === user.id;

  return (
    <article className={
      classNames(
        s.message, 
        {[s.message_loginUser]: loginUser}
      )}
    >
      <img 
        src={message.authorAvatar} 
        alt='User avatar' 
        className={s.message__authorAvatar}
      />

      <div 
        className={
          classNames(
            s.message__text,
            {[s.message__text_loginUser]: loginUser}
        )}
      >
        {message.message}
      </div>
    </article>
  );
};

export default Message;
