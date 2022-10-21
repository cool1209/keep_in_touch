const SET_USER = 'SET_USER';

const initialState = {
  user: {}
};

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      }

    default:
      return state;
  };
}

export const setUser = (user) => ({
  type: SET_USER,
  user
});

export default loginUserReducer;
