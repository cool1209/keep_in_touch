import { connect } from 'react-redux';
import { compose } from 'redux';
import { setIsContactSelected } from '../../../../../../../../store/reducers/dialogsReducer';
import Contacts from './Contacts';

const mapStateToProps = (state) => ({
  dialogs: state.dialogs.dialogs,
  isContactSelected: state.dialogs.isContactSelected
});

export default compose(
  connect(mapStateToProps, {setIsContactSelected})
)(Contacts);
