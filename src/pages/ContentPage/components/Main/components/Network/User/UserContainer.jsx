import React from 'react';
import { connect } from 'react-redux';
import server from '../../../../../../../backend/server/server';
import { addFollowing, removeFollowing } from '../../../../../../../store/reducers/followingReducer';

import User from './User';

const UserContainer = ({
  user,
  authUserId,
  followings,
  addFollowing,
  removeFollowing
}) => {
  const isFollowing = followings
  .some(following => following.id === user.id);

  const throttle = (func) => {
    let isProcessing = false;
    
    const wrapper = async () => {
      if (isProcessing) {
        return;
      }

      isProcessing  = true;

      await func();

      isProcessing  = false;
    }
  
    return wrapper;
  }
  
  const follow = async () => {
    const response = await server.post(
      'follow',
      {userId: authUserId, newFollowing: user.id}
    );

    if (response.status === '200') {
      addFollowing(user);
    }
  };

  const unfollow = async () => {
    const response = await server.delete(
      'unfollow',
      {userId: authUserId, unfollow: user.id}
    );

    if (response.status === '200') {
      removeFollowing(user.id);
    }
  };

  return (
    <User
      user={user}
      onFollow={throttle(follow)}
      onUnfollow={throttle(unfollow)}
      isFollowing={isFollowing}
    />
  );
};

const mapStateToProps = (state) => ({
  authUserId: state.auth.authUser.id,
  followings: state.followings.followings
});

export default connect(
  mapStateToProps,
  {
    addFollowing,
    removeFollowing
  }
)(UserContainer);
