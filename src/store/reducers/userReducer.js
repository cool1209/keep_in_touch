const SET_CURRENT_USER = 'SET_CURRENT_USER';

const initialState = {
  currentUser: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      }
    
    default:
      return state;
  };
}

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user
});

export default userReducer;
