import server from '../../../../../../backend/server/server';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setDialogsAC } from '../../../../../../store/reducers/dialogsReducer';
import Messages from './Dialogs';

const DialogsContainer = ({ user, setDialogs }) => {
  useEffect(() => {
    server.get(`server/api/dialogs?user=${user.id}`)
    .then(messages => {
      if (messages) {
        setDialogs(messages.items);
      }
    });
  }, []);

  return (
    <Messages />
  );
};

const mapStateToProps = (state) => ({
  user: state.loginUser.user,
});

const mapDispatchToProps = (dispatch) => ({
  setDialogs: (messages) => {
    dispatch(setDialogsAC(messages));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogsContainer);
