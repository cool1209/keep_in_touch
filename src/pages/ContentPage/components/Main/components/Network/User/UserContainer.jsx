import React from 'react';
import { connect } from 'react-redux';
import server from '../../../../../../../backend/server/server';

import User from './User';

const UserContainer = ({
  user,
  authUserId
}) => {
  const follow = () => {
    server.post('follow', {userId: authUserId, newFollowing: user.id})
    .then(response => {
      console.log('follow');
      console.log(response);
    });
  };

  const unfollow = () => {
    server.delete('unfollow', {userId: authUserId, unfollow: user.id})
    .then(response => {
      console.log('unfollow');
      console.log(response);
    });
  };

  return (
    <User
      user={user}
      onFollow={() => follow()}
      onUnfollow={() => unfollow()}
    />
  );
};

const mapStateToProps = (state) => ({
  authUserId: state.auth.authUser.id,
  followings: state.followings.followings
});

export default connect(mapStateToProps)(UserContainer);
