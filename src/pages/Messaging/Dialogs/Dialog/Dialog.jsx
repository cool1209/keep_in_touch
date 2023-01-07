import React from 'react';

import Message from './Message/Message';
import MessageFormContainer from './MessageForm/MessageFormContainer';
import styles from './Dialog.module.scss';

const Dialog = ({
  authUser,
  dialog
}) => {
  return (
    <li className={styles.dialog}>
      <ul className={styles.dialog__messages}>
        {dialog.messages.map(message => (
          <Message 
            authUser={authUser}
            message={message}
            key={message.id}
          />
        )).reverse()}
      </ul>

      <MessageFormContainer dialogId={dialog.id} />   
  </li>
  );
};

export default Dialog;
