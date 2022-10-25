import server from '../../../../../../backend/server/server';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setDialogs } from '../../../../../../store/reducers/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = ({
  authUser,
  setDialogs,
  isDialogs
}) => {
  
  useEffect(() => {
    server.get(`server/api/dialogs?user=${authUser.id}`)
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
  authUser: state.auth.authUser,
  isDialogs: state.dialogs.totalDialogs
});

export default connect(mapStateToProps, {setDialogs})(DialogsContainer);
