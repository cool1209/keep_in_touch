import React from 'react';
import styles from './Messages.module.css';
import DialogList from './DialogList/DialogList';
import MessageList from './MessageList/MessageList';

const Messages = ({ dialogs, messages }) => {
  return (
    <section className={styles.Messages}>
      <h2 className={styles.title}>
        Messages:
      </h2>

      <div className={styles.container}>
        <DialogList dialogs={dialogs} />

        <div className={styles.messagesWrapper}>
          <MessageList messages={messages} />
          
          <div className={styles.myMessage}>
            <textarea className={styles.myMessageInput}></textarea>
            <button className={styles.myMessageBtn}>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
