import React from 'react';
import styles from './Messages.module.css';
import { Route, Routes } from 'react-router-dom';
import Message from './Message/Message';
import WithNoData from '../../../../../../../shared/WithNoData/WithNoData';


const Messages = ({
  user,
  dialogs,
  newMessageText,
  onUpdateText,
  onSendMessage
}) => {

  return (
    <ul className={styles.messages}>
      <div className={styles.messages__hint}>
        {dialogs.length
          ? <WithNoData message={'Please select a contact'} />
          : <WithNoData message={"You don't have any dialogue..."} />
        }
      </div>

      <Routes>
        {dialogs.map(dialog => (
          <Route
            path={`${dialog.id}`}
            key={dialog.id} 
            element={
              <li className={styles.messages__container}>
                <ul className={styles.messages__dialogMessages}>
                  {dialog.messages.map(message => (
                    <Message 
                      message={message}
                      user={user}
                      key={message.id}
                    />
                  ))}
                </ul>

                <div className={styles.messages__sendMessage}>
                  <input
                    type="text"
                    className={styles.messages__input}
                    onChange={(e) => onUpdateText(e.target.value)}
                    placeholder="New message..."
                    value={newMessageText}
                  />
                  <button
                    className={styles.messages__btn}
                    onClick={() => onSendMessage(dialog.id, user)}
                  >Send</button>
                </div>
              </li>
            }
          />
        ))}
      </Routes>
    </ul>
  );
};

export default Messages;
