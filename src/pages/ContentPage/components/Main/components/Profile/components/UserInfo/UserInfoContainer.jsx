import server from '../../../../../../../../backend/server/server';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import { setDialogs, setNoContactSelected } from '../../../../../../../../store/reducers/dialogsReducer';
import { setPosts, setUserPosts } from '../../../../../../../../store/reducers/postsReducer';
import { setUser } from '../../../../../../../../store/reducers/loginUserReducer';
import { setUsers } from '../../../../../../../../store/reducers/usersReducer';

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
    dispatch(setUser({}));
    dispatch(setUsers([]));
    dispatch(setUserPosts([], null));
    dispatch(setPosts([], null));
    dispatch(setDialogs([], null));
    dispatch(setNoContactSelected());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoContainer);
