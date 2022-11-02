import { applyMiddleware, combineReducers, createStore } from "redux";
import postsReducer from "./reducers/postsReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";
import profileReducer from "./reducers/profileReducer";
import authReducer from "./reducers/authReducer";
import followingReducer from "./reducers/followingReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  users: usersReducer,
  posts: postsReducer,
  dialogs: dialogsReducer,
  followings: followingReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
