import { profileAPI } from "../../api/api";

const SET_PROFILE = 'SET_PROFILE';
const SET_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS';
const SET_IS_AUTH_USER_PROFILE = 'SET_IS_AUTH_USER_PROFILE';

const initialState = {
  profile: {},
  profileStatus: '',
  authUserProfile: '',
  isAuthUserProfile: true
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_PROFILE:
      return {
        ...state,
        profile: action.user,
      }

    case SET_IS_AUTH_USER_PROFILE:
      return {
        ...state,
        isAuthUserProfile: action.isAuthUserProfile,
      }

    case SET_PROFILE_STATUS:
      return {
        ...state,
        profileStatus: action.profileStatus
      }
    
    default:
      return state;
  };
}

export const setProfile = (user) => ({
  type: SET_PROFILE,
  user
});

export const setIsAuthUserProfile = (isAuthUserProfile) => ({
  type: SET_IS_AUTH_USER_PROFILE,
  isAuthUserProfile
});

export const getProfile = (userId) => (dispatch) => {
  dispatch(setProfile({}));

  profileAPI.getProfile(userId)
  .then(response => {
    if (response.status === 200) {
      const user = response.data;
      
      dispatch(setProfile(user));
    }
  });
};

export const setProfileStatus = (profileStatus) => ({
  type: SET_PROFILE_STATUS,
  profileStatus
});

export const getProfileStatus = (userId) => (dispatch) => {
  profileAPI.getProfileStatus(userId)
  .then(response => {
    if (+response.status === 200) {
      dispatch(setProfileStatus(response.profileStatus));
    }
  });
}

export const putProfileStatus = (userId, status) => (dispatch) => {
  profileAPI.putProfileStatus({userId, status})
  .then(response => {
    if (+response.status === 200) {
      dispatch(setProfileStatus(status));
    }
  });
}

export default profileReducer;
