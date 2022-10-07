import { connect } from 'react-redux';
import { removeCurentUserCreator } from '../../../../../../../../store/reducers/usersReducer';
import UserInfo from './UserInfo';


const mapStateToProps = (state) => ({
  user: state.users.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  removeCurentUser: () => dispatch(removeCurentUserCreator())
});

const UserInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfo);
  
export default UserInfoContainer;
