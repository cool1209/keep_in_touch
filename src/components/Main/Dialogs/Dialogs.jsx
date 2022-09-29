import React from 'react';
import {
  sendMessageCreator,
  updateMessageTextCreator
} from '../../../store/store';
import styles from './Dialogs.module.css';
import Messages from './Messages/Messages';
import Companion from './Companion/Companion';
import { Route, Routes } from 'react-router-dom';

const Dialogs = ({ store }) => {
  const state = store.getState();
  const { user, dialogsPage } = state;
  const { dialogs, newMessageText } = dialogsPage;

  const updateText = (text) => store.dispatch(updateMessageTextCreator(text));
  const sendMessage = () => store.dispatch(sendMessageCreator());

  return (
    <section className={styles.messages}>
      <h2 className={styles.title}>
        Dialog:
      </h2>

      <div className={styles.container}>
        <ul className={styles.dialogList}>
          {dialogs.map(dialog => (
            <Companion dialog={dialog} key={dialog.id} />
          ))}
        </ul>

        <div className={styles.messagesWrapper}>
          <ul className={styles.messageList}>
            <Routes>
              {dialogs.map(dialog => (
                <Route
                  path={`${dialog.id}`}
                  key={dialog.id}
                  element={ <Messages dialog={dialog} user={user}/> }
                />
              ))}
            </Routes>
          </ul>

          <div className={styles.myMessage}>
            <input
              type="text"
              placeholder="Input your message..."
              className={styles.myMessageInput}
              value={newMessageText}
              onChange={(e) => updateText(e.target.value)}
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

export default Dialogs;
