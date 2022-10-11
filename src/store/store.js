import { combineReducers, createStore } from "redux";
import usersReducer from "./reducers/usersReducer";
import publicationsReducer from "./reducers/publicationsReducer";
import messagesReducer from "./reducers/dialogsReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  publications: publicationsReducer,
  dialogs: messagesReducer,
});

const store = createStore(rootReducer);

export default store;
