import server from '../../../../../../../../backend/server/server';

import React from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from '../../../../../../../../store/reducers/authReducer';
import { setCurrentUser } from '../../../../../../../../store/reducers/userReducer';
import { setUsers } from '../../../../../../../../store/reducers/usersReducer';
import { setPosts, setUserPosts } from '../../../../../../../../store/reducers/postsReducer';
import { setDialogs, setNoContactSelected } from '../../../../../../../../store/reducers/dialogsReducer';
import { setFollowings } from '../../../../../../../../store/reducers/followingReducer';

import UserLogoutButton from './UserLogoutButton';

const UserLogoutButtonContainer = ({
  removeUserSession,
  authUserId
}) => {

  const logoutUser = () => {
    server.removeSession('remove-session', authUserId);
    removeUserSession();
  }

  return (
    <UserLogoutButton onLogoutUser={() => logoutUser()} />
  );
};

const mapStateToProps = (state) => ({
  authUserId: state.auth.authUser.id
});

const mapDispatchToProps = (dispatch) => ({
  removeUserSession: () => {
    dispatch(setAuthUser({}));
    dispatch(setCurrentUser({}));
    dispatch(setUsers([], null, 0));
    dispatch(setUserPosts([], null));
    dispatch(setPosts([], null));
    dispatch(setDialogs([], null));
    dispatch(setNoContactSelected());
    dispatch(setFollowings([], null, 0));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLogoutButtonContainer);
