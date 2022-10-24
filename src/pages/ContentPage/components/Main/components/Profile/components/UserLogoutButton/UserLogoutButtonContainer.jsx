import server from '../../../../../../../../backend/server/server';

import React from 'react';
import { connect } from 'react-redux';
import { setAuthorizedUser, setCurrentUser } from '../../../../../../../../store/reducers/userReducer';
import { setUsers } from '../../../../../../../../store/reducers/usersReducer';
import { setPosts, setUserPosts } from '../../../../../../../../store/reducers/postsReducer';
import { setDialogs, setNoContactSelected } from '../../../../../../../../store/reducers/dialogsReducer';

import UserLogoutButton from './UserLogoutButton';

const UserLogoutButtonContainer = ({
  logoutAuthorizedUser,
  authorizedUserId
}) => {

  const logoutUser = () => {
    server.put(`server/api/logout?user=${authorizedUserId}`);
    logoutAuthorizedUser();
  }

  return (
    <UserLogoutButton onLogoutUser={() => logoutUser()} />
  );
};

const mapStateToProps = (state) => ({
  authorizedUserId: state.user.authorizedUser.id
});

const mapDispatchToProps = (dispatch) => ({
  logoutAuthorizedUser: () => {
    dispatch(setAuthorizedUser({}));
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
