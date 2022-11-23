import { authAPI } from "../../api/authAPI";
import { getInitialAuthUser } from "../functions/getInitialAuthUser";
import authUserInStorage from "../functions/handleSessionStorage";

const SET_AUTH_USER = "SET_AUTH_USER";
const SET_IS_LOADING_PROCESS = "SET_IS_LOADING_PROCESS";
const SET_IS_AUTH_ERROR = "SET_IS_AUTH_ERROR";

const initialState = {
  authUser: getInitialAuthUser(),
  isLoadingProcess: false,
  isAuthError: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_PROCESS:
      return {
        ...state,
        isLoadingProcess: action.isProcess,
      };

    case SET_AUTH_USER:
      return {
        ...state,
        authUser: action.user,
      };
    
    case SET_IS_AUTH_ERROR:
      return {
        ...state,
        isAuthError: action.isError
      }

    default:
      return state;
  }
};

export const setAuthUser = (user) => ({
  type: SET_AUTH_USER,
  user,
});

export const setIsLoadingProcess = (isProcess) => ({
  type: SET_IS_LOADING_PROCESS,
  isProcess,
});

export const setIsAuthError = (isError) => ({
  type: SET_IS_AUTH_ERROR,
  isError
});

export const userAuth = (form) => (dispatch) => {
  if (!authUserInStorage.present()) {
    dispatch(setIsLoadingProcess(true));

    const { login, password } = form;
    const authInfo = { login, password }
  
    authAPI.authorization(authInfo).then((response) => {
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
    });
  }
};

export default authReducer;
