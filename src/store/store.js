import { combineReducers, createStore } from "redux";
import postsReducer from "./reducers/postsReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";
import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/authReducer";
import followingReducer from "./reducers/followingReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  users: usersReducer,
  posts: postsReducer,
  dialogs: dialogsReducer,
  followings: followingReducer
});

const store = createStore(rootReducer);

export default store;
