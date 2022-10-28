import React from 'react';
import { connect } from 'react-redux';
import { updateMessageText, addMessage } from '../../../../../../../../../store/reducers/dialogsReducer';
import MessagingItem from './MessagingItem';
import { postNewMessage } from '../../../../../../../../../api/api';

const MessagingItemContainer = ({
  dialog,
  authUser,
  newMessageText,
  updateMessageText,
  addMessage
}) => {

  const createNewMessage = () => {
    return {
      id: dialog.messages.length + 1,
      dialogId: dialog.id,
      authorId: authUser.id,
      authorAvatar: authUser.avatar,
      message: newMessageText.trim(),
    }
  };

  const sendMessage =() => {
    if (newMessageText.trim()) {
      const newMessage = createNewMessage();
      
      postNewMessage(newMessage)
      .then(status => {
        if (status === 200) {
          addMessage(newMessage);
        }
      });
    } 
    
    updateMessageText('');
  };

  return (
    <MessagingItem
      authUser={authUser}
      dialog={dialog}
      newMessageText={newMessageText}
      onUpdateMessageText={updateMessageText}
      onSendMessage={sendMessage}
    />
  );
};

const mapStatetoProps =(state) => ({
  authUser: state.auth.authUser,
  newMessageText: state.dialogs.newMessageText,
});

export default connect(
  mapStatetoProps,
  {
    updateMessageText,
    addMessage
  }
  )(MessagingItemContainer);
