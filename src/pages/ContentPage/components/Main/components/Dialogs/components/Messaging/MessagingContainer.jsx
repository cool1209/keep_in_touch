import { connect } from 'react-redux';
import Messaging from './Messaging';

import {
  sendMessage,
  updateMessageText
} from '../../../../../../../../store/reducers/dialogsReducer';


const mapStateToProps = (state) => ({
  authUser: state.auth.authUser,
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
