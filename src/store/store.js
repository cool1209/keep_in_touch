import { combineReducers, createStore } from "redux";
import loginUserReducer from "./reducers/loginUserReducer";
import publicationsReducer from "./reducers/publicationsReducer";
import messagesReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
  user: loginUserReducer,
  users: usersReducer,
  publications: publicationsReducer,
  dialogs: messagesReducer,
});

const store = createStore(rootReducer);

export default store;
