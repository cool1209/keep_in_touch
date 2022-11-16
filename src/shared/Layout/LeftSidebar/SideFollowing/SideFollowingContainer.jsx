import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import SideFollowing from './SideFollowing';
import { getFollowings } from '../../../../store/reducers/followingReducer';

const SideFollowingContainer = ({
  authUserId,
  followings,
  isFollowings,
  getFollowings,
}) => {
  
  useEffect(() => {
    getFollowings(authUserId);
  }, []);

  return (
    <>
      { isFollowings &&
        <SideFollowing followings={followings.slice(0, 3)} />
      }
    </>
  );
};

const mapStatetoProps = (state) => ({
  authUserId: state.auth.authUser.id,
  followings: state.followings.followings,
  isFollowings: !!state.followings.followings.length
});

export default compose(
  connect(mapStatetoProps, {getFollowings})
)(SideFollowingContainer);
