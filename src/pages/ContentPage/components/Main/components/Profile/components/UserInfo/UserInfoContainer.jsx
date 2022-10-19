import server from '../../../../../../../../backend/server/server';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import { setDialogsAC, setNoContactSelectedAC } from '../../../../../../../../store/reducers/dialogsReducer';
import { setPostsAC } from '../../../../../../../../store/reducers/postsReducer';
import { setUserAC } from '../../../../../../../../store/reducers/loginUserReducer';
import { setUsersAC } from '../../../../../../../../store/reducers/usersReducer';

const UserInfoContainer = ({ user, setUser }) => {

  const logoutUser = (id) => {
    server.put(`server/api/logout?user=${id}`);
    setUser();
  }

  return (
    <UserInfo
      user={user}
      logoutUser={logoutUser}
    />
  )
}

const mapStateToProps = (state) => ({
  user: state.loginUser.user
});

const mapDispatchToProps = (dispatch) => ({
  setUser: () => {
    dispatch(setUserAC({}));
    dispatch(setUsersAC([]));
    dispatch(setPostsAC([]));
    dispatch(setDialogsAC([]));
    dispatch(setNoContactSelectedAC());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoContainer);
