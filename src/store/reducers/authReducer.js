const SET_AUTH_USER = 'SET_AUTH_USER';

const initialState = {
  authUser: {},
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default authReducer;
