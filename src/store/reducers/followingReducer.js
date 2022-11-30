import { followingsAPI } from "../../api/followingsAPI";

const SET_FOLLOWINGS = "following/SET_FOLLOWINGS";
const SET_IS_FOLLOWING_PROCESS = "following/SET_IS_FOLLOWING_PROCESS";

const initialState = {
  followings: [],
  totalFollowings: null,
  currentPage: 0,
  isFollowingProcesses: [],
};

const followingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOLLOWINGS:
      return {
        ...state,
        followings: action.followings,
        totalFollowings: action.totalFollowings,
        currentPage: action.currentPage,
      };

    case SET_IS_FOLLOWING_PROCESS:
      return {
        ...state,
        isFollowingProcesses: action.isProcess
          ? [...state.isFollowingProcesses, action.userId]
          : state.isFollowingProcesses.filter(
              (process) => process !== action.userId
            ),
      };

    default:
      return state;
  }
};

export const setFollowings = (followings, totalFollowings, currentPage) => ({
  type: SET_FOLLOWINGS,
  followings,
  totalFollowings,
  currentPage,
});

export const setIsFollowingProcess = (isProcess, userId) => ({
  type: SET_IS_FOLLOWING_PROCESS,
  isProcess,
  userId,
});

export const fetchFollowings = () => async (dispatch) => {
  const response = await followingsAPI.fetchFollowings();

  if (response.statusCode === 200) {
    const { items, totalCount } = response.data;

    dispatch(setFollowings(items, totalCount));
  }
};

export const follow = (followingUserId) => async (dispatch) => {
  dispatch(setIsFollowingProcess(true, followingUserId));

  const response = await followingsAPI.follow({
    newFollowing: followingUserId,
  });

  if (response.statusCode === 200) {
    dispatch(fetchFollowings());
  }

  dispatch(setIsFollowingProcess(false, followingUserId));
};

export const unfollow = (followingUserId) => async (dispatch) => {
  dispatch(setIsFollowingProcess(true, followingUserId));

  const response = await followingsAPI.unfollow(followingUserId);
  if (response.statusCode === 200) {
    dispatch(fetchFollowings());
  }

  dispatch(setIsFollowingProcess(false, followingUserId));
};

export default followingReducer;
