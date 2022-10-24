const SET_AUTHORIZED_USER = 'SET_AUTHORIZED_USER';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

const initialState = {
  authorizedUser: {},
  currentUser: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORIZED_USER:
      return {
        ...state,
        authorizedUser: action.user,
      }

    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      }
    
    default:
      return state;
  };
}

export const setAuthorizedUser = (user) => ({
  type: SET_AUTHORIZED_USER,
  user
});

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user
});

export default userReducer;
