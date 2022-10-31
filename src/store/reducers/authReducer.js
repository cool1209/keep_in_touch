import { authAPI } from "../../api/api";
import { setDialogs, updateMessageText } from "./dialogsReducer";
import { setFollowings } from "./followingReducer";
import { setPosts, setUserPosts } from "./postsReducer";
import { setCurrentUser } from "./profileReducer";
import { setUsers } from "./usersReducer";

const SET_AUTH_USER = 'SET_AUTH_USER';
const SET_IS_LOADING_PROCESS = 'SET_IS_LOADING_PROCESS';

const initialState = {
  authUser: {},
  isAuth: false,
  isLoadingProcess: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_PROCESS:
      return {
        ...state,
        isLoadingProcess: action.isProcess
      }

    case SET_AUTH_USER:
      return {
        ...state,
        authUser: action.user,
        isAuth: !state.isAuth
      }
    
    default:
      return state;
  };
}

export const setAuthUser = (user) => ({
  type: SET_AUTH_USER,
  user
});

export const setIsLoadingProcess = (isProcess) => ({
  type: SET_IS_LOADING_PROCESS,
  isProcess
})

export const openAuthUserSession = (login) => (dispatch) => {
  dispatch(setIsLoadingProcess(true));

  authAPI.openAuth(login)
  .then(user => {
    dispatch(setAuthUser(user));
    dispatch(setIsLoadingProcess(false));
  });
}

export const closeAuthUserSession = (userId) => (dispatch) => {
  authAPI.closeAuth(userId)
  dispatch(setAuthUser({}));
  dispatch(setFollowings([], null, 0));
  dispatch(setPosts([], null));
  dispatch(setDialogs([], null));
  dispatch(updateMessageText(''));
  dispatch(setUsers([], null, 0));
  dispatch(setCurrentUser({}));
  dispatch(setUserPosts([], null));
}

export default authReducer;
