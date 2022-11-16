import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import MessageForm from "./MessageForm";
import { sendMessage } from "../../../../../store/reducers/dialogsReducer";

const MessageFormContainer = ({ dialogId, sendMessage }) => {
  const [ messageText, setMessageText ] = useState('');

  const handleChange = (e) => {
    setMessageText(e.target.value);
  }

  const hundleSubmit = (e) => {
    e.preventDefault();

    if (messageText.trim()) {
      const newMessageInfo = {
        message: messageText.trim(),
        dialogId
      };

      sendMessage(newMessageInfo);
    }

    setMessageText('');

    return false;
  }

  return (
    <MessageForm
    messageText={messageText}
    onHandleChange={handleChange}
    onHundleSubmit={hundleSubmit}
    />
  );
};

const mapStateToDispatch = {
  sendMessage
};

export default compose(
  connect(null, mapStateToDispatch)
)(MessageFormContainer);
