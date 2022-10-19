import { connect } from 'react-redux';
import Messaging from './Messaging';

import {
  sendMessageAC,
  setNoContactSelectedAC,
  updateMessageTextAC
} from '../../../../../../../../store/reducers/dialogsReducer';


const mapStateToProps = (state) => ({
  user: state.loginUser.user,
  dialogs: state.dialogs.dialogs,
  isContactSelected: state.dialogs.isContactSelected,
  newMessageText: state.dialogs.newMessageText
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateText: (messageText) => (
    dispatch(updateMessageTextAC(messageText))
  ),
  onSendMessage: (dialogId, user) => (
    dispatch(sendMessageAC(dialogId, user))
  ),
  setNoContactSelected: () => {
    dispatch(setNoContactSelectedAC());
  }
});

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messaging);

export default MessagesContainer;
