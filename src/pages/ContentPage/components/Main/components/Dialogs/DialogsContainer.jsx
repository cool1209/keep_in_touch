import { connect } from 'react-redux';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  user: state.users.loginUser,
  dialogs: state.dialogs.dialogs
});

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
