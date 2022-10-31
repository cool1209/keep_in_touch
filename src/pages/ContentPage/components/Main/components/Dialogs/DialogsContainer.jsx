import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDialogs } from '../../../../../../store/reducers/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = ({
  authUserId,
  getDialogs,
  isDialogs
}) => {
  
  useEffect(() => {
    getDialogs(authUserId);
  }, []);

  return (
    <Dialogs isDialogs={isDialogs} />
  );
};

const mapStateToProps = (state) => ({
  authUserId: state.auth.authUser.id,
  isDialogs: state.dialogs.totalDialogs
});

export default connect(mapStateToProps, {getDialogs})(DialogsContainer);
