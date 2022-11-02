import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { updateMessageText, sendMessage } from '../../../../../../../../../store/reducers/dialogsReducer';
import MessagingItem from './MessagingItem';

const MessagingItemContainer = ({
  dialog,
  authUser,
  newMessageText,
  updateMessageText,
  sendMessage
}) => {

  const onSendMessage = () => {
    sendMessage(newMessageText, dialog, authUser);
  };

  return (
    <MessagingItem
      authUser={authUser}
      dialog={dialog}
      newMessageText={newMessageText}
      onUpdateMessageText={updateMessageText}
      onSendMessage={onSendMessage}
    />
  );
};

const mapStatetoProps =(state) => ({
  authUser: state.auth.authUser,
  newMessageText: state.dialogs.newMessageText,
});

export default compose(
  connect(mapStatetoProps, {updateMessageText, sendMessage})
)(MessagingItemContainer);
