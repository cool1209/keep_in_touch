import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import SideFollowing from './SideFollowing';
import { fetchFollowings } from '../../../../store/reducers/followingReducer';

const SideFollowingContainer = ({
  followings,
  isFollowings,
  fetchFollowings,
}) => {

  const getThreeFollowings = () => {
    return followings.slice(0, 3);
  }
  
  useEffect(() => {
    fetchFollowings();
  }, []);

  return (
    <>
      { isFollowings &&
        <SideFollowing followings={getThreeFollowings()} />
      }
    </>
  );
};

const mapStatetoProps = (state) => ({
  followings: state.followings.followings,
  isFollowings: !!state.followings.followings.length
});

const mapStateToDispatch = {
  fetchFollowings
};

export default compose(
  connect(mapStatetoProps, mapStateToDispatch)
)(SideFollowingContainer);
