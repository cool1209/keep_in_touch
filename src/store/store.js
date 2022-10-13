import { combineReducers, createStore } from "redux";
import publicationsReducer from "./reducers/publicationsReducer";
import messagesReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  publications: publicationsReducer,
  dialogs: messagesReducer,
});

const store = createStore(rootReducer);

export default store;
