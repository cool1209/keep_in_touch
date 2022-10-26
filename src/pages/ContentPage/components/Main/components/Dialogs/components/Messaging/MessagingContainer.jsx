import { connect } from 'react-redux';
import Messaging from './Messaging';

const mapStateToProps = (state) => ({
  dialogs: state.dialogs.dialogs,
  isContactSelected: state.dialogs.isContactSelected,
});

export default connect(mapStateToProps)(Messaging);
