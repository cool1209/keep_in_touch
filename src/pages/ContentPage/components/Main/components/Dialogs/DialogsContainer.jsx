import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setDialogs } from '../../../../../../store/reducers/dialogsReducer';
import Dialogs from './Dialogs';
import { getUserDialogs } from '../../../../../../api/api';

const DialogsContainer = ({
  authUserId,
  setDialogs,
  isDialogs
}) => {
  
  useEffect(() => {
    getUserDialogs(authUserId)
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
