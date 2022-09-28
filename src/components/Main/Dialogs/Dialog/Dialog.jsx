import React from 'react';
// import { sendMessageCreator, updateMessageTextCreator } from '../../../../store/store';
import styles from './Dialog.module.css';

const Dialog = ({ dialog }) => {
  const { members, messages } = dialog;

  // const sendMessage = () => store.dispatch(sendMessageCreator());
  // const updateText = (text) => store.dispatch(updateMessageTextCreator(text));

  return (
    <div>
      <div>
        {members[0]}
      </div>

      <div>
        {messages}
      </div>
    </div>
  );
}

export default Dialog;
