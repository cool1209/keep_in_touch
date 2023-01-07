import { authAPI } from "../../api/authAPI";
import { changeState } from "../functions/changeState";
import { getInitialAuthUser } from "../functions/getInitialAuthUser";
import authUserInStorage from "../functions/handleSessionStorage";

const SET_AUTH_USER = "auth/SET_AUTH_USER";
const SET_IS_LOADING_PROCESS = "auth/SET_IS_LOADING_PROCESS";
const SET_IS_AUTH_ERROR = "auth/SET_IS_AUTH_ERROR";

const initialState = {
  authUser: getInitialAuthUser(),
  isLoadingProcess: false,
  isAuthError: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_PROCESS:
      return changeState(state, action, "isLoadingProcess");

    case SET_AUTH_USER:
      return changeState(state, action, "authUser");

    case SET_IS_AUTH_ERROR:
      return changeState(state, action, "isAuthError");

    default:
      return state;
  }
};

export const setAuthUser = (payload) => ({
  type: SET_AUTH_USER,
  payload,
});

export const setIsLoadingProcess = (payload) => ({
  type: SET_IS_LOADING_PROCESS,
  payload,
});

export const setIsAuthError = (payload) => ({
  type: SET_IS_AUTH_ERROR,
  payload,
});

export const fetchUserAuth = (form) => async (dispatch) => {
  if (!authUserInStorage.present()) {
    dispatch(setIsLoadingProcess(true));

    const { login, password } = form;
    const authInfo = { login, password };

    const response = await authAPI.authorization(authInfo);
    if (response.statusCode === 200) {
      const user = response.data;

      dispatch(setAuthUser(user));
      dispatch(setIsLoadingProcess(false));
      dispatch(setIsAuthError(false));

      authUserInStorage.set(user);
    } else {
      dispatch(setIsAuthError(true));
      dispatch(setIsLoadingProcess(false));

      setTimeout(() => {
        dispatch(setIsAuthError(false));
      }, 1000);
    }
  }
};

export default authReducer;
