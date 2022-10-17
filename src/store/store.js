import { combineReducers, createStore } from "redux";
import postsReducer from "./reducers/postsReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";
import loginUserReducer from "./reducers/loginUserReducer";

const rootReducer = combineReducers({
  loginUser: loginUserReducer,
  users: usersReducer,
  posts: postsReducer,
  dialogs: dialogsReducer,
});

const store = createStore(rootReducer);

export default store;
