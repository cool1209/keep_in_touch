const ADD_PUBLICATION = 'ADD_PUBLICATION';
const UPDATE_PUBLICATION_TEXT = 'UPDATE_PUBLICATION_TEXT';
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
    switch (action.type) {
      case ADD_PUBLICATION:
        const publicationId = this._state.publicationsPage.publications.length + 1;
        const publication = {
          id: publicationId,
          likes: 0,
          publication: this._state.publicationsPage.newPublicationText,
          userId: 1,
        }
        
        if (this._state.publicationsPage.newPublicationText) {
          this._state.publicationsPage.publications.push(publication);
          this._state.publicationsPage.newPublicationText = '';
          this._callSubscriber();
        }
        return;

      case UPDATE_PUBLICATION_TEXT:
        this._state.publicationsPage.newPublicationText = action.payload;
        this._callSubscriber();
        return;

      case ADD_MESSAGE:
        const messageId = this._state.messagesPage.messages.length + 1;
  
        const message = {
          id: messageId,
          messageUser: 'Iron-man',
          messageAva: 'https://bit.ly/3RGqLZ0',
          message: this._state.messagesPage.newMessageText,
        }
      
        if (this._state.messagesPage.newMessageText) {
          this._state.messagesPage.messages.push(message);
          this._state.messagesPage.newMessageText = '';
          this._callSubscriber();
        }
        return;

      case UPDATE_MESSAGE_TEXT:
        this._state.messagesPage.newMessageText = action.payload;
        this._callSubscriber();
        return;

      default:
        return this._state
    }
  }
};

export const addPublicationCreator = () => ({
  type: ADD_PUBLICATION
});

export const updatePublicationTextCreator = (text) => ({
  type: UPDATE_PUBLICATION_TEXT,
  payload: text
});

export const sendMessageCreator = () => ({
  type: ADD_MESSAGE
});

export const updateMessageTextCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  payload: text
});

export default store;
