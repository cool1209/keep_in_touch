import React from 'react';
import MessagesStyles from './Messages.module.css';
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
    <ul className={MessagesStyles.wrapper}>
      <div className={MessagesStyles.hint}>
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
              <li className={MessagesStyles.container}>
                <ul className={MessagesStyles.dialogMessages}>
                  {dialog.messages.map(message => (
                    <Message 
                      message={message}
                      user={user}
                      key={message.id}
                    />
                  ))}
                </ul>

                <div className={MessagesStyles.sendMessage}>
                  <input
                    type="text"
                    className={MessagesStyles.input}
                    onChange={(e) => onUpdateText(e.target.value)}
                    placeholder="New message..."
                    value={newMessageText}
                  />
                  <button
                    className={MessagesStyles.btn}
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
