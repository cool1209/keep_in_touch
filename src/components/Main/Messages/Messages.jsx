import React from 'react';
import styles from './Messages.module.css';
import DialogList from './DialogList/DialogList';
import MessageList from './MessageList/MessageList';
import { sendMessageCreator, updateMessageTextCreator } from '../../../store/store';

const Messages = ({ store }) => {
  const state = store.getState();
  const { messagesPage } = state;
  const { dialogs, messages, newMessageText } = messagesPage;

  return (
    <section className={styles.messages}>
      <h2 className={styles.title}>
        Messages:
      </h2>

      <div className={styles.container}>
        <DialogList dialogs={dialogs} />

        <div className={styles.messagesWrapper}>
          <MessageList messages={messages} />
          
          <div className={styles.myMessage}>
            <input
              type="text"
              placeholder="Input your message..."
              className={styles.myMessageInput}
              value={newMessageText}
              onChange={(e) => (
                store.dispatch(updateMessageTextCreator(e.target.value))
              )}
            />

            <button
              className={styles.myMessageBtn}
              onClick={() => store.dispatch(sendMessageCreator())}
            >Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
