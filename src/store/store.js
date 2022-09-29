import publicationReducer from "./reducers/publicationReducer";


const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

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
    publicationReducer(this._state.publicationsPage, action);
    this._callSubscriber();
    
    switch (action.type) {
      case ADD_MESSAGE:
        const messageId = this._state.dialogsPage.dialogs[0].messages.length + 1;
  
        const message = {
          id: messageId,
          member: 'Iron-man',
          memberAvatar: 'https://bit.ly/3RGqLZ0',
          message: this._state.dialogsPage.newMessageText,
        }

        if (this._state.dialogsPage.newMessageText) {
          this._state.dialogsPage.dialogs[0].messages.push(message);
          this._state.dialogsPage.newMessageText = '';
          this._callSubscriber();
        }
        
        return;

      case UPDATE_MESSAGE_TEXT:
        this._state.dialogsPage.newMessageText = action.payload;
        this._callSubscriber();
        return;

      default:
        return this._state
    }
  }
};

export const sendMessageCreator = () => ({
  type: ADD_MESSAGE
});

export const updateMessageTextCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  payload: text
});

export default store;
