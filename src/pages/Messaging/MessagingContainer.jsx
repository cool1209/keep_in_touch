import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import withLayout from '../../hocs/withLayout';
import withAuthUser from '../../hocs/withAuthUser';
import { fetchDialogs } from '../../store/reducers/dialogsReducer';
import Messaging from './Messaging';
import { getTotalDialogs } from '../../store/selectors/dialogsSelectors';

const MessagingContainer = ({ fetchDialogs, totalDialogs }) => {
  
  useEffect(() => {
    fetchDialogs();
  }, []);

  return (
    <Messaging totalDialogs={totalDialogs} />
  );
};

const mapStateToProps = (state) => ({
  totalDialogs: getTotalDialogs(state)
});

const mapStateToDispatch = {
  fetchDialogs
};

export default compose(
  withAuthUser,
  withLayout,
  connect(mapStateToProps, mapStateToDispatch)
)(MessagingContainer);
