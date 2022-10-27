import server from '../../../../../../backend/server/server';

import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { setFollowings } from '../../../../../../store/reducers/followingReducer';
import SideFollowing from './SideFollowing';

const SideFollowingContainer = ({
  authUserId,
  followings,
  isFollowings,
  setFollowings
}) => {
  
  useEffect(() => {
    server.get('user-followings', authUserId)
    .then(followings => {
      if (followings) {
        console.log('server',followings);
        setFollowings(followings.items, followings.totalCount);
      }
    });
  }, []);

  return (
    <>
      { isFollowings && <SideFollowing followings={followings.slice(0, 3)} /> }
    </>
  );
};

const mapStatetoProps = (state) => ({
  authUserId: state.auth.authUser.id,
  followings: state.followings.followings,
  isFollowings: !!state.followings.followings.length
});

export default connect(
  mapStatetoProps,
  {setFollowings}
)(SideFollowingContainer);
