import server from '../../../../../../backend/server/server';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setDialogs } from '../../../../../../store/reducers/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = ({
  authUserId,
  setDialogs,
  isDialogs
}) => {
  
  useEffect(() => {
    server.get(`user-dialogs`, authUserId)
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
  authUserId: state.auth.authUser.id,
  isDialogs: state.dialogs.totalDialogs
});

export default connect(mapStateToProps, {setDialogs})(DialogsContainer);
