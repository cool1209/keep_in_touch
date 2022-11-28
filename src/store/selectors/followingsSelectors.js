export const getFollowings = (state) => (
   state.followings.followings
);

export const getIsFollowings = (state) => (
  !!state.followings.followings.length
);

export const getIsFollowingProcesses = (state) => (
  state.followings.isFollowingProcesses
);
