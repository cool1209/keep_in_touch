import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  sendMessageCreator,
  updateMessageTextCreator
} from '../../../../store/reducers/dialogsReduser';

import styles from './Dialogs.module.css';
import Messages from './Messages/Messages';
import Companion from './Companion/Companion';

const Dialogs = ({ store }) => {
  const state = store.getState().currentUser;
  const { user, dialogsPage } = state;
  const { dialogs, newMessageText } = dialogsPage;

  const updateText = (text) => store.dispatch(updateMessageTextCreator(text));
  const sendMessage = () => store.dispatch(sendMessageCreator());

  return (
    <section className={styles.dialogs}>
      <ul className={styles.dialogs__dialogList}>
        {dialogs.map(dialog => (
          <Companion dialog={dialog} key={dialog.id} />
        ))}
      </ul>

      <div className={styles.dialogs__messages}>
        <ul className={styles.dialogs__messageList}>
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

        <div className={styles.dialogs__CurrentUserMessage}>
          <input
            type="text"
            placeholder="Input your message..."
            className={styles.dialogs__messageInput}
            value={newMessageText}
            onChange={(e) => updateText(e.target.value)}
          />

          <button
            className={styles.dialogs__messageBtn}
            onClick={sendMessage}
          >Send</button>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
