import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { follow, unfollow } from '../../../store/reducers/followingReducer';

import User from './User';

const UserContainer = ({
  user,
  authUserId,
  followings,
  follow,
  unfollow,
  isFollowingProcesses
}) => {
  const isFollowing = followings
  .some(following => following.id === user.id);

  const checkFollowingProcess = (userId) => (
    isFollowingProcesses.some(process => process === userId)
  );

  return (
    <User
      authUserId={authUserId}
      user={user}
      onFollow={follow}
      onUnfollow={unfollow}
      isFollowing={isFollowing}
      checkFollowingProcess={checkFollowingProcess}
    />
  );
};

const mapStateToProps = (state) => ({
  authUserId: state.auth.authUser.id,
  followings: state.followings.followings,
  isFollowingProcesses: state.followings.isFollowingProcesses
});

export default compose(
  connect(mapStateToProps, {follow, unfollow})
)(UserContainer);
