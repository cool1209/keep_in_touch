import React from 'react';
import styles from './Messages.module.css';
import DialogList from './DialogList/DialogList';
import MessageList from './MessageList/MessageList';
import store from '../../../store/store';

const { addMessage, updateMessageText } = store;

const Messages = ({ dialogs, messages, newMessageText }) => {
  const newMessageInput = React.createRef()

  const sendMessage = () => {
    addMessage(newMessageText);
  };

  const onChangeMessageText = () => {
    const text = newMessageInput.current.value;
    updateMessageText(text);
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
              ref={newMessageInput}
              type="text"
              placeholder="Input your message..."
              className={styles.myMessageInput}
              value={newMessageText}
              onChange={onChangeMessageText}
            />

            <button
              className={styles.myMessageBtn}
              onClick={sendMessage}
            >Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
