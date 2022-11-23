import { followingsAPI } from "../../api/followingsAPI";

const SET_FOLLOWINGS = 'SET_FOLLOWINGS';
const SET_IS_FOLLOWING_PROCESS = 'SET_IS_FOLLOWING_PROCESS';

const initialState = {
  followings: [],
  totalFollowings: null,
  currentPage: 0,
  isFollowingProcesses: []
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

    case SET_IS_FOLLOWING_PROCESS:
      return {
        ...state,
        isFollowingProcesses: action.isProcess
        ? [...state.isFollowingProcesses, action.userId]
        : state.isFollowingProcesses
          .filter(process => process !== action.userId)
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

export const setIsFollowingProcess = (isProcess, userId) => ({
  type: SET_IS_FOLLOWING_PROCESS,
  isProcess,
  userId
})


export const fetchFollowings = () => (dispatch) => {
  followingsAPI.fetchFollowings()
  .then(response => {
    if (response.statusCode === 200) {
      const { items, totalCount } = response.data;
      
      dispatch(setFollowings(items, totalCount));
    }
  });
}

export const follow = (followingUserId) => (dispatch) => {
  dispatch(setIsFollowingProcess(true, followingUserId));

  followingsAPI.follow({newFollowing: followingUserId})
    .then(response => {
      if (response.statusCode === 200) {
        dispatch(fetchFollowings());
      };

      dispatch(setIsFollowingProcess(false, followingUserId));
    }
  );

};

export const unfollow = (followingUserId) => (dispatch) => {
  dispatch(setIsFollowingProcess(true, followingUserId));

  followingsAPI.unfollow(followingUserId)
  .then(response => {
    if (response.statusCode === 200) {
      dispatch(fetchFollowings());
    }

    dispatch(setIsFollowingProcess(false, followingUserId));
  });
};

export default followingReducer;
