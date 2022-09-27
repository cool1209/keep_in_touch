import React from 'react';
import styles from './Messages.module.css';
import DialogList from './DialogList/DialogList';
import MessageList from './MessageList/MessageList';
import store, { sendMessageCreator, updateMessageTextCreator } from '../../../store/store';

const Messages = ({ dialogs, messages, newMessageText }) => {
  const onSendMessage = () => {
    store.dispatch(sendMessageCreator());
  };

  const onChangeMessageText = (event) => {
    const text = event.target.value;
    store.dispatch(updateMessageTextCreator(text));
  };

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
              onChange={onChangeMessageText}
            />

            <button
              className={styles.myMessageBtn}
              onClick={onSendMessage}
            >Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
