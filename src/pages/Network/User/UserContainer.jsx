import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { follow, unfollow } from '../../../store/reducers/followingReducer';

import User from './User';

const UserContainer = ({
  user,
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

  const followingToggler = () => {
    if (isFollowing) {
      unfollow(user.id)
    } else {
      follow(user.id);
    } 
  };

  return (
    <User
      user={user}
      onFollowingToggler={followingToggler}
      isFollowing={isFollowing}
      checkFollowingProcess={checkFollowingProcess}
    />
  );
};

const mapStateToProps = (state) => ({
  followings: state.followings.followings,
  isFollowingProcesses: state.followings.isFollowingProcesses
});

const mapStateToDispatch = {
  follow,
  unfollow
};

export default compose(
  connect(mapStateToProps, mapStateToDispatch)
)(UserContainer);
