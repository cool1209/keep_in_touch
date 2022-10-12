import { connect } from 'react-redux';
import Contacts from './Contacts';


const mapStateToProps = (state) => ({
  dialogs: state.dialogs.dialogs
});

const ContactsContainer = connect(mapStateToProps)(Contacts)

export default ContactsContainer;
