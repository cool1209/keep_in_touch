import { connect } from 'react-redux';
import { setIsContactSelected } from '../../../../../../../../store/reducers/dialogsReducer';
import Contacts from './Contacts';

const mapStateToProps = (state) => ({
  dialogs: state.dialogs.dialogs,
  isContactSelected: state.dialogs.isContactSelected
});

export default connect(
  mapStateToProps,
  {setIsContactSelected}
)(Contacts);
