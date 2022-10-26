const SET_FOLLOWINGS = 'SET_FOLLOWINGS';

const initialState = {
  followings: [],
  totalFollowings: null,
  currentPage: 0,
};

const followingReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_FOLLOWINGS:

      return {
        ...state,
        followings: action.followings,
        totalFollowings: action.totalFollowings,
        currentPage: action.currentPage,
      }

    default:
      return state;
  }
};

export const setFollowings = (
  followings,
  totalFollowings,
  currentPage
) => ({
  type: SET_FOLLOWINGS,
  followings,
  totalFollowings,
  currentPage
});

export default followingReducer;
