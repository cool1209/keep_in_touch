import { connect } from 'react-redux';
import { logoutUserAC } from '../../../../../../../../store/reducers/loginUserReducer';
import UserInfo from './UserInfo';


const mapStateToProps = (state) => ({
  user: state.user.user
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutUser: () => {
    dispatch(logoutUserAC());
  }
});

const UserInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfo);
  
export default UserInfoContainer;
