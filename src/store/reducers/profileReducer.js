import { profileAPI } from "../../api/profileAPI";
import { changeState } from "../functions/changeState";

const SET_PROFILE = "profile/SET_PROFILE";
const SET_PROFILE_STATUS = "profile/SET_PROFILE_STATUS";
const SET_ONLINE_STATUS = "profile/SET_ONLINE_STATUS";
const SET_IS_AUTH_USER_PROFILE = "profile/SET_IS_AUTH_USER_PROFILE";

const initialState = {
  profile: {},
  onlineStatus: false,
  isAuthUserProfile: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return changeState(state, action, "profile");

    case SET_IS_AUTH_USER_PROFILE:
      return changeState(state, action, "isAuthUserProfile");

    case SET_PROFILE_STATUS:
      return changeState(state, action,"profile", 'status', true);

    case SET_ONLINE_STATUS:
      return changeState(state, action, "onlineStatus");

    default:
      return state;
  }
};

export const setProfile = (payload) => ({
  type: SET_PROFILE,
  payload,
});

export const setIsAuthUserProfile = (payload) => ({
  type: SET_IS_AUTH_USER_PROFILE,
  payload,
});

export const setProfileStatus = (payload) => ({
  type: SET_PROFILE_STATUS,
  payload,
});

export const setOnlineStatus = (payload) => ({
  type: SET_ONLINE_STATUS,
  payload,
});

export const putProfileStatus = (status) => async (dispatch) => {
  const response = await profileAPI.putProfileStatus(status);

  if (response) {
    if (response.statusCode === 200) {
      dispatch(setProfileStatus(status));
    }
  }
};

export const fetchProfile = (userId) => async (dispatch) => {
  dispatch(setProfile({}));

  const response = await profileAPI.fetchProfile(userId);

  if (response.statusCode === 200) {
    const profile = response.data;

    dispatch(setProfile(profile));
  }
};

export const fetchOnlineStatus = (profileId) => async (dispatch) => {
  const response = await profileAPI.fetchOnlineStatus(profileId);

  if (response.statusCode === 200) {
    const onlineStatus = response.data;

    dispatch(setOnlineStatus(onlineStatus));
  }
};

export default profileReducer;
