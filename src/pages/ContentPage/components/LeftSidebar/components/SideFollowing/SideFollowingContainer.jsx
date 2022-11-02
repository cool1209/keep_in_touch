import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getFollowings, setFollowings } from '../../../../../../store/reducers/followingReducer';
import SideFollowing from './SideFollowing';

const SideFollowingContainer = ({
  authUserId,
  followings,
  isFollowings,
  getFollowings,
  setFollowings
}) => {
  
  useEffect(() => {
    getFollowings(authUserId);

    return () => {
      setFollowings([], null);
    }
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

export default compose(
  connect(mapStatetoProps, {getFollowings, setFollowings})
)(SideFollowingContainer);
