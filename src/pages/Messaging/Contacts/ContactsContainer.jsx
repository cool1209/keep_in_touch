import { connect } from 'react-redux';
import { compose } from 'redux';
import { setIsContactSelected } from '../../../store/reducers/dialogsReducer';
import Contacts from './Contacts';

const mapStateToProps = (state) => ({
  dialogs: state.dialogs.dialogs,
  isSelected: state.dialogs.isContactSelected
});

const mapStateToDispatch = {
  setIsContactSelected
};

export default compose(
  connect(mapStateToProps, mapStateToDispatch)
)(Contacts);
