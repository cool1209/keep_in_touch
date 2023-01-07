import { connect } from 'react-redux';
import { compose } from 'redux';

import { setIsContactSelected } from '../../../store/reducers/dialogsReducer';
import { getDialogs, getIsContactSelected } from '../../../store/selectors/dialogsSelectors';
import Contacts from './Contacts';

const mapStateToProps = (state) => ({
  dialogs: getDialogs(state),
  isSelected: getIsContactSelected(state)
});

const mapStateToDispatch = {
  setIsContactSelected
};

export default compose(
  connect(mapStateToProps, mapStateToDispatch)
)(Contacts);
