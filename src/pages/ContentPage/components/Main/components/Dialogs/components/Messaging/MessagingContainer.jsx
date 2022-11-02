import { connect } from 'react-redux';
import { compose } from 'redux';
import Messaging from './Messaging';

const mapStateToProps = (state) => ({
  dialogs: state.dialogs.dialogs,
  isContactSelected: state.dialogs.isContactSelected,
});

export default compose(
  connect(mapStateToProps)
)(Messaging);
