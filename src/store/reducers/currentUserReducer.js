const GET_CURRENT_USER = 'GET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

const currentUserReducer = (state, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      state.user = state.users.find(user => user.id === action.payload);
      return state;

    case REMOVE_CURRENT_USER:
      state.user = {};
      return state;

    default:
      return state;
  };
}

export const getCurentUserCreator = (id) => ({
    type: GET_CURRENT_USER,
    payload: id
  });

export const removeCurentUserCreator = () => ({ type: REMOVE_CURRENT_USER });

export default currentUserReducer;
