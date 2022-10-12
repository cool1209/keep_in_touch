import Messages from './Messages';
import { connect } from 'react-redux';

import {
  sendMessageAC,
  updateMessageTextAC
} from '../../../../../../../../store/reducers/dialogsReducer';


const mapStateToProps = (state) => ({
  user: state.user.user,
  dialogs: state.dialogs.dialogs,
  newMessageText: state.dialogs.newMessageText
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
