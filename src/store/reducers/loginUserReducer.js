import {
  postUserLogin,
  getUser
} from "../../backend/server/server";

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

const initialState = {
  user: {}
};

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      postUserLogin(action.login);

      return {
        ...state,
        user: getUser()
      }

    case LOGOUT_USER:
      return {
        ...state,
        user: {}
      }

    default:
      return state;
  };
}

export const loginUserAC = (login) => ({
    type: LOGIN_USER,
    login
  });

export const logoutUserAC = () => ({ type: LOGOUT_USER });

export default loginUserReducer;
