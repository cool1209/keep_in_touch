import { followingsAPI } from "../../api/api";

const SET_FOLLOWINGS = 'SET_FOLLOWINGS';
const ADD_FOLLOWING = 'ADD_FOLLOWING';
const REMOVE_FOLLOWING = 'REMOVE_FOLLOWING';
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

    case ADD_FOLLOWING:

    return {
        ...state,
        followings: [ action.user, ...state.followings ]
      }

    case REMOVE_FOLLOWING:
      return {
        ...state,
        followings: state.followings
        .filter(followin => followin.id !== action.userId)
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

export const addFollowing = (user) => ({
  type: ADD_FOLLOWING,
  user
});

export const removeFollowing = (userId) => ({
  type: REMOVE_FOLLOWING,
  userId
});

export const setIsFollowingProcess = (isProcess, userId) => ({
  type: SET_IS_FOLLOWING_PROCESS,
  isProcess,
  userId
})


export const getFollowings = (userId) => (dispatch) => {
  followingsAPI.getFollowings(userId)
  .then(response => {
    if (response.status === 200) {
      const followings = response.data;
      
      dispatch(setFollowings(followings.items, followings.totalCount));
    }
  });
}

export const follow = (authUserId, followingUser) => (dispatch) => {
  dispatch(setIsFollowingProcess(true, followingUser.id));

  followingsAPI.postFollow(
    {userId: authUserId, newFollowing: followingUser.id}
    )
    .then(response => {
      if (response.status === 200) {
        dispatch(addFollowing(followingUser));
      };

      dispatch(setIsFollowingProcess(false, followingUser.id));
    }
  );

};

export const unfollow = (authUserId, followingUser) => (dispatch) => {
  dispatch(setIsFollowingProcess(true, followingUser.id));

  followingsAPI.deleteFollow(
    {userId: authUserId, unfollow: followingUser.id}
  )
  .then(response => {
    if (response.status === 200) {
      dispatch(removeFollowing(followingUser.id));
    }

    dispatch(setIsFollowingProcess(false, followingUser.id));
  });

};

export default followingReducer;
