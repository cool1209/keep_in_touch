import { combineReducers, createStore } from "redux";
import usersReducer from "./reducers/usersReducer";
import publicationsReducer from "./reducers/publicationsReducer";
import messagesReducer from "./reducers/messagesReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  publications: publicationsReducer,
  messages: messagesReducer,
});

const store = createStore(rootReducer);

export default store;
