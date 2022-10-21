import server from '../../../../../../backend/server/server';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setDialogs } from '../../../../../../store/reducers/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = ({ user, setDialogs, isDialogs }) => {
  useEffect(() => {
    server.get(`server/api/dialogs?user=${user.id}`)
    .then(dialogs => {
      if (dialogs) {
        setDialogs(dialogs.items, dialogs.tottalCount);
      }
    });
  }, []);

  return (
    <Dialogs isDialogs={isDialogs} />
  );
};

const mapStateToProps = (state) => ({
  user: state.loginUser.user,
  isDialogs: state.dialogs.totalDialogs
});

export default connect(mapStateToProps, {setDialogs})(DialogsContainer);
