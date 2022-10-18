import UserInfo from './UserInfo';
import { connect } from 'react-redux';
import { setDialogsAC } from '../../../../../../../../store/reducers/dialogsReducer';
import { setPostsAC } from '../../../../../../../../store/reducers/postsReducer';
import { setUserAC } from '../../../../../../../../store/reducers/loginUserReducer';
import { setUsersAC } from '../../../../../../../../store/reducers/usersReducer';

const mapStateToProps = (state) => ({
  user: state.loginUser.user
});

const mapDispatchToProps = (dispatch) => ({
  setUser: () => {
    dispatch(setUserAC({}));
    dispatch(setUsersAC([]));
    dispatch(setPostsAC([]));
    dispatch(setDialogsAC([]));
  }
});

const UserInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfo);
  
export default UserInfoContainer;
