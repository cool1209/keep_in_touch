import users from "../../data/users";
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

const initialState = {
  loginUser: {},
  users: users
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginUser: state.users.find(user => user.id === action.payload)
      }

    case LOGOUT_USER:
      return {
        ...state,
        loginUser: {}
      }

    default:
      return state;
  };
}

export const loginUserAC = (id) => ({
    type: LOGIN_USER,
    payload: id
  });

export const logoutUserAC = () => ({ type: LOGOUT_USER });

export default usersReducer;
