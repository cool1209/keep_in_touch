import { connect } from 'react-redux';
import Contacts from './Contacts';


const mapStateToProps = (state) => ({
  user: state.users.loginUser,
  users: state.users.users,
  dialogs: state.dialogs.dialogs
});

const ContactsContainer = connect(mapStateToProps)(Contacts)

export default ContactsContainer;
