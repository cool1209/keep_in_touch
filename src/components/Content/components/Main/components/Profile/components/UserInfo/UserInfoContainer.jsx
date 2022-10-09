import { connect } from 'react-redux';
import { logoutUserAC } from '../../../../../../../../store/reducers/usersReducer';
import UserInfo from './UserInfo';


const mapStateToProps = (state) => ({
  user: state.users.loginUser
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutUser: () => dispatch(logoutUserAC())
});

const UserInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfo);
  
export default UserInfoContainer;
