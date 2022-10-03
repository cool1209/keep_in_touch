import data from "../../data/data";
const GET_CURRENT_USER = 'GET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

const initialState = {
  currentUser: {},
  allUsers: data.users,
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_CURRENT_USER:
      state.currentUser = state.allUsers.find(user => user.id === action.payload);
      return state;

    case REMOVE_CURRENT_USER:
      state.currentUser = {};
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

export default usersReducer;
