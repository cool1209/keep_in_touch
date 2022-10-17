import { connect } from 'react-redux';
import { setDialogsAC } from '../../../../../../store/reducers/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  user: state.loginUser.user,
});

const mapDispatchToProps = (dispatch) => ({
  setDialogs: (dialogs) => {
    dispatch(setDialogsAC(dialogs));
  }
});

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
