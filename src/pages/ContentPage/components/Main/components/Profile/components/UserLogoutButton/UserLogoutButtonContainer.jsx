import server from '../../../../../../../../backend/server/server';

import React from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from '../../../../../../../../store/reducers/authReducer';
import { setCurrentUser } from '../../../../../../../../store/reducers/userReducer';
import { setUsers } from '../../../../../../../../store/reducers/usersReducer';
import { setPosts, setUserPosts } from '../../../../../../../../store/reducers/postsReducer';
import { setDialogs, setNoContactSelected } from '../../../../../../../../store/reducers/dialogsReducer';

import UserLogoutButton from './UserLogoutButton';

const UserLogoutButtonContainer = ({
  logoutauthUser,
  authUserId
}) => {

  const logoutUser = () => {
    server.put(`server/api/logout?user=${authUserId}`);
    logoutauthUser();
  }

  return (
    <UserLogoutButton onLogoutUser={() => logoutUser()} />
  );
};

const mapStateToProps = (state) => ({
  authUserId: state.auth.authUser.id
});

const mapDispatchToProps = (dispatch) => ({
  logoutauthUser: () => {
    dispatch(setAuthUser({}));
    dispatch(setCurrentUser({}));
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
)(UserLogoutButtonContainer);
