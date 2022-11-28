import { connect } from 'react-redux';
import { compose } from 'redux';

import { getDialogs, getIsContactSelected } from '../../../store/selectors/dialogsSelectors';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogs: getDialogs(state),
  isContactSelected: getIsContactSelected(state)
});

export default compose(
  connect(mapStateToProps)
)(Dialogs);
