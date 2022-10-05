import { connect } from 'react-redux';
import Contacts from './Contacts';


const mapStateToProps = (state) => ({
  user: state.users.currentUser,
  users: state.users.allUsers,
  dialogs: state.messages.dialogs
});

  // const getContactId = (dialog) => (
  //   dialog.membersId.find(member => member !== user.id)
  // );

  // const getContactName = (dialog) => (
  //   users.find(user => user.id === getContactId(dialog))
  // ).name;

const ContactsContainer = connect(mapStateToProps)(Contacts)

export default ContactsContainer;
