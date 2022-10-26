import React from 'react';
import { connect } from 'react-redux';

import User from './User';

const UserContainer = ({ user }) => {
  const follow = () => {
    console.log('Follow');
  };

  const unfollow = () => {
    console.log('Unfollow');
  };

  return (
    <User
      user={user}
      onFollow={() => follow()}
      onUnfollow={() => unfollow()}
    />
  );
};

export default connect()(UserContainer);
