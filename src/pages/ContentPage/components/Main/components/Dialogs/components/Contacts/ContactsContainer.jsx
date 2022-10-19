import { connect } from 'react-redux';
import { setIsContactSelectedAC } from '../../../../../../../../store/reducers/dialogsReducer';
import Contacts from './Contacts';

const mapStateToProps = (state) => ({
  dialogs: state.dialogs.dialogs,
  isContactSelected: state.dialogs.isContactSelected
});

const mapDispatchToProps = (dispatc) => ({
  onSetIsContactSelected: () => {
    dispatc(setIsContactSelectedAC());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
