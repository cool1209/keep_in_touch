import Messages from './Messages';
import { connect } from 'react-redux';

import {
  sendMessageAC,
  updateMessageTextAC
} from '../../../../../../../../store/reducers/dialogsReducer';


const mapStateToProps = (state) => ({
  user: state.users.user,
  dialogs: state.dialogs.dialogs,
  newMessageText: state.dialogs.newMessageText
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateText: (messageText) => (
    dispatch(updateMessageTextAC(messageText))
  ),
  onSendMessage: (dialogId, user) => (
    dispatch(sendMessageAC(dialogId, user))
  )
});

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
