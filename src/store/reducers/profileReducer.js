import { profileAPI } from "../../api/profileAPI";

const SET_PROFILE = 'SET_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const SET_ONLINE_STATUS = 'SET_ONLINE_STATUS';
const SET_IS_AUTH_USER_PROFILE = 'SET_IS_AUTH_USER_PROFILE';

const initialState = {
  profile: {},
  onlineStatus: false,
  isAuthUserProfile: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }

    case SET_IS_AUTH_USER_PROFILE:
      return {
        ...state,
        isAuthUserProfile: action.isAuthUserProfile,
      }

    case SET_PROFILE_STATUS:
      return {
        ...state,
        profile: { ...state.profile, status: action.profileStatus}
      }

    case SET_ONLINE_STATUS:
      return {
        ...state,
        onlineStatus: action.onlineStatus
      }
    
    default:
      return state;
  };
}

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile
});

export const setIsAuthUserProfile = (isAuthUserProfile) => ({
  type: SET_IS_AUTH_USER_PROFILE,
  isAuthUserProfile
});

export const setProfileStatus = (profileStatus) => ({
  type: SET_PROFILE_STATUS,
  profileStatus
});

export const setOnlineStatus = (onlineStatus) => ({
  type: SET_ONLINE_STATUS,
  onlineStatus
});

export const putProfileStatus = (status) => (dispatch) => {
  profileAPI.putProfileStatus(status)
  .then(response => {
    if (response) {
      if (response.statusCode === 200) {
        dispatch(setProfileStatus(status));
      }
    }
  });
};

export const fetchProfile = (userId) => (dispatch) => {
  dispatch(setProfile({}));

  profileAPI.fetchProfile(userId)
  .then(response => {
    if (response.statusCode === 200) {
      const profile = response.data;
      
      dispatch(setProfile(profile));
    }
  });
};

export const fetchOnlineStatus = (profileId) => (dispatch) => {
  profileAPI.fetchOnlineStatus(profileId)
  .then(response => {
    if (response.statusCode === 200) {
      const onlineStatus = response.data;

      dispatch(setOnlineStatus(onlineStatus));
    }
  });
};

export default profileReducer;
