import { connect } from 'react-redux';
import { compose } from 'redux';

import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogs: state.dialogs.dialogs,
  isContactSelected: state.dialogs.isContactSelected,
});

export default compose(
  connect(mapStateToProps)
)(Dialogs);
