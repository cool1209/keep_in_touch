import { usersAPI } from "../../api/api";
import { getUserPosts, setUserPosts } from "./postsReducer";

const SET_CURRENT_USER = 'SET_CURRENT_USER';

const initialState = {
  currentUser: {}
};

const profileReducer = (state = initialState, action) => {
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

export const getCurrentUser = (userId, authUser) => (dispatch) => {
  dispatch(setCurrentUser({}));

  if (userId === authUser.id) {
    dispatch(setCurrentUser(authUser));
  } else {
    usersAPI.getCurrentUser(userId)
    .then(response => {
      if (response.status === 200) {
        const user = response.data;
        
        dispatch(setCurrentUser(user));
      }
    });
  };
};

export default profileReducer;
