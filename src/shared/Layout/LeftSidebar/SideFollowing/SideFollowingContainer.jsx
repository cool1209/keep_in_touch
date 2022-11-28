import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import SideFollowing from './SideFollowing';
import { fetchFollowings } from '../../../../store/reducers/followingReducer';
import { getFollowings, getIsFollowings } from '../../../../store/selectors/followingsSelectors';

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
  followings: getFollowings(state),
  isFollowings: getIsFollowings(state)
});

const mapStateToDispatch = {
  fetchFollowings
};

export default compose(
  connect(mapStatetoProps, mapStateToDispatch)
)(SideFollowingContainer);
