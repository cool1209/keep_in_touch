import { combineReducers, createStore } from "redux";
import postsReducer from "./reducers/postsReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  posts: postsReducer,
  dialogs: dialogsReducer,
});

const store = createStore(rootReducer);

export default store;
