import Messages from './Messages';
import { connect } from 'react-redux';

import {
  sendMessageCreator,
  updateMessageTextCreator
} from '../../../../../../../../store/reducers/messagesReducer';


const mapStateToProps = (state) => ({
  user: state.users.currentUser,
  users: state.users.allUsers,
  dialogs: state.messages.dialogs,
  newMessageText: state.messages.newMessageText
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateText: (messageText) => (
    dispatch(updateMessageTextCreator(messageText))
  ),
  onSendMessage: (dialogId, userId) => (
    dispatch(sendMessageCreator(dialogId, userId))
  )
});

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
