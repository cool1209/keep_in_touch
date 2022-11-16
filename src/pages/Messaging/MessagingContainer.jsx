import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import withLayout from '../../hocs/withLayout';
import withAuthUser from '../../hocs/withAuthUser';
import { getDialogs } from '../../store/reducers/dialogsReducer';
import Messaging from './Messaging';

const MessagingContainer = ({ getDialogs, totalDialogs }) => {
  
  useEffect(() => {
    getDialogs();
  }, []);

  return (
    <Messaging totalDialogs={totalDialogs} />
  );
};

const mapStateToProps = (state) => ({
  totalDialogs: state.dialogs.totalDialogs
});

const mapStateToDispatch = {
  getDialogs
};

export default compose(
  withAuthUser,
  withLayout,
  connect(mapStateToProps, mapStateToDispatch)
)(MessagingContainer);
