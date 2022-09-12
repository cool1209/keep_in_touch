import React from 'react';
import styles from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessagesItem from './MessagesItem/MessagesItem';

const Messages = ({ dialogs, messages }) => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Messages:</h2>
      <div className={styles.container}>
        <ul className={styles.dialogList}>
          {dialogs.map(dialog => (
            <DialogItem
              key={dialog.id}
              name={dialog.name}
              id={dialog.id}
              avatar={dialog.avatar}
            />
          ))}
        </ul>

        <ul className={styles.messageList}>
          {messages.map(message => (
            <MessagesItem
              key={message.id}
              avatar={message.messageAva}
              name={message.messageUser}
              message={message.message}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Messages;
