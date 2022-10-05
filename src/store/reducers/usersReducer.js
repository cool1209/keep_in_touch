import data from "../../data/data";
const GET_CURRENT_USER = 'GET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

const initialState = {
  currentUser: {},
  allUsers: data.users,
};

const usersReducer = (state = initialState, action) => {
  const stateCopy = {...state}

  switch (action.type) {
    case GET_CURRENT_USER:
      stateCopy.currentUser = state.allUsers.find(user => user.id === action.payload);
      return stateCopy;

    case REMOVE_CURRENT_USER:
      stateCopy.currentUser = {};
      return stateCopy;

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
