const SET_USERS = 'SET_USERS';
const RESET_REQUIRED_USERS_PAGE = 'RESET_REQUIRED_USERS_PAGE';
const ADD_USERS = 'ADD_USERS';

const initialState = {
  users: [],
  requiredUsersPage: 1
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
        requiredUsersPage: 2
      }
        
    case ADD_USERS:
      return {
        ...state,
        users: [ ...state.users, ...action.users ],
        requiredUsersPage: state.requiredUsersPage + 1
    }

    case RESET_REQUIRED_USERS_PAGE:
      return {
        ...state,
        requiredUsersPage: 1
    }

    default:
      return state;
  };
}

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users
});

export const addUsersAC = (users) => ({
  type: ADD_USERS,
  users
});

export const resetRequiredUsersPageAC = () => ({
  type: RESET_REQUIRED_USERS_PAGE
});

export default usersReducer;
