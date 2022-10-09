import Messages from './Messages';
import { connect } from 'react-redux';

import {
  sendMessageAC,
  updateMessageTextAC
} from '../../../../../../../../store/reducers/messagesReducer';


const mapStateToProps = (state) => ({
  user: state.users.loginUser,
  users: state.users.users,
  dialogs: state.messages.dialogs,
  newMessageText: state.messages.newMessageText
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateText: (messageText) => (
    dispatch(updateMessageTextAC(messageText))
  ),
  onSendMessage: (dialogId, userId) => (
    dispatch(sendMessageAC(dialogId, userId))
  )
});

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
