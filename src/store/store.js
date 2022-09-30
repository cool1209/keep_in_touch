import dialogsReduser from "./reducers/dialogsReduser";
import publicationsReducer from "./reducers/publicationsReducer";

const store = {
  _state: [],

  _callSubscriber() {
    return null;
  },

  setState(initialState) {
    this._state = initialState;
  },

  getState() {
    return this._state;
  },

  subscribe(observer) { 
    this._callSubscriber = observer;
  },

  dispatch(action) {
    publicationsReducer(this._state.currentUser.publicationsPage, action);
    dialogsReduser(this._state.currentUser.dialogsPage, action);

    this._callSubscriber();
  }
};

export default store;
