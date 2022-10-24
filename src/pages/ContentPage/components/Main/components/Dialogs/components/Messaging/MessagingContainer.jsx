import { connect } from 'react-redux';
import Messaging from './Messaging';

import {
  sendMessage,
  updateMessageText
} from '../../../../../../../../store/reducers/dialogsReducer';


const mapStateToProps = (state) => ({
  authorizedUser: state.user.authorizedUser,
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
