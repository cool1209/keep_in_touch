import currentUserReducer from "./reducers/currentUserReducer";
import messagesReduser from "./reducers/messagesReduser";
import publicationsReducer from "./reducers/publicationsReducer";
import data from '../data/data.js';

const initialState = {
  user: {},
  publicationsPage: {
    publications: [],
    newPublicationText: "",
  },
  dialogsPage: {
    dialogs: [],
    newMessageText: ""
  },
  users: data.users ? data.users : [],
  publications: data.publications ? data.publications : [],
  dialogs: data.dialogs ? data.dialogs : []
};

const store = {
  _state: initialState,

  _callSubscriber() {
    return null;
  },

  getState() {
    return this._state;
  },

  subscribe(observer) { 
    this._callSubscriber = observer;
  },

  dispatch(action) {
    currentUserReducer(this._state, action)
    publicationsReducer(this._state, action);
    messagesReduser(this._state, action);

    this._callSubscriber();
  }
};

export default store;
