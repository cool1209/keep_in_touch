import { combineReducers, createStore } from "redux";
import publicationsReducer from "./reducers/publicationsReducer";
import dialogsReduser from "./reducers/publicationsReducer";

const initialState = {
  currentUser: {},
  publicationsPage: {
    publications: [],
    newPublicationText: "",
  },
  dialogsPage: {
    dialogs: [],
    newMessageText: ""
  },
  users: [],
  publications: [],
  dialogs: []
}

const rootReducer = combineReducers({
  publicationsPage: publicationsReducer,
  dialogsPage: dialogsReduser,
});

const store = createStore(initialState, rootReducer);

export default store;
