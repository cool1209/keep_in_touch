import { getUsers } from "../../backend/server";

const SET_USERS = 'SET_USERS';
const ADD_USERS = 'ADD_USERS';

const initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        users: getUsers(0)
      }

    case ADD_USERS:
      return {
        users: [ ...state.users, ...getUsers(state.users.length) ]
      }

    default:
      return state;
  };
}

export const setUsersAC = () => ({
  type: SET_USERS,
});

export const addUsersAC = () => ({
    type: ADD_USERS,
  });

export default usersReducer;
