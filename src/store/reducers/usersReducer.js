const SET_USER = 'SET_USER';
const SET_USERS = 'SET_USERS';
const ADD_USERS = 'ADD_USERS';

const initialState = {
  user: {},
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      }

    case SET_USERS:
      return {
        ...state,
        users: action.users
      }

    case ADD_USERS:
      return {
        ...state,
        users: [ ...state.users, ...action.users ]
      }

    default:
      return state;
  };
}

export const setUserAC = (user) => ({
  type: SET_USER,
  user
});

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users
});

export const addUsersAC = (users) => ({
    type: ADD_USERS,
    users
  });

export default usersReducer;
