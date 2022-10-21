import { connect } from 'react-redux';
import Messaging from './Messaging';

import {
  sendMessage,
  updateMessageText
} from '../../../../../../../../store/reducers/dialogsReducer';


const mapStateToProps = (state) => ({
  user: state.loginUser.user,
  dialogs: state.dialogs.dialogs,
  isContactSelected: state.dialogs.isContactSelected,
  newMessageText: state.dialogs.newMessageText
});

export default connect(
  mapStateToProps,
  {
    updateMessageText,
    sendMessage,
  }
)(Messaging);
