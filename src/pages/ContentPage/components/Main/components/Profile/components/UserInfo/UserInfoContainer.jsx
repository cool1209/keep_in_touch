import { connect } from 'react-redux';
import UserInfo from './UserInfo';

const UserInfoContainer = ({ currentUser }) => {

  return (
    <UserInfo currentUser={currentUser} />
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(UserInfoContainer);
