import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  sendMessageCreator,
  updateMessageTextCreator
} from '../../../../store/reducers/dialogsReduser';

import styles from './Dialogs.module.css';
import Messages from './Messages/Messages';
import Companion from './Companion/Companion';
import getCurrentUserData from '../../../../functions/user-data';

const Dialogs = ({ store }) => {
  const state = store.getState();
  const {
    user,
    dialogsPage
  } = getCurrentUserData(state);
  const { dialogs, newMessageText } = dialogsPage;

  let dialogId = 0;
  const getDialogId = (id) => dialogId = id;

  const updateText = (text) => store.dispatch(updateMessageTextCreator(text));
  const sendMessage = () => store.dispatch(sendMessageCreator());

  return (
    <section className={styles.dialogs}>
      <ul className={styles.dialogs__dialogList}>
        {dialogs.map(dialog => (
          <Companion dialog={dialog} key={dialog.id} getDialogId={getDialogId} />
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

        <div className={styles.dialogs__sendMessage}>
          <div className={styles.dialogs__sendMessageInner}>
            <input
              type="text"
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
      </div>
    </section>
  );
};

export default Dialogs;
