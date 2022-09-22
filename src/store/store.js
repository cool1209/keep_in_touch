const store = {
  _state: [],

  setState(initialState) {
    this._state = initialState;
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    return null;
  }
  ,
  addPublication() {
    const id = this._state.publications.length + 1;
  
    const publication = {
      id,
      likes: 0,
      publication: this._state.newPublicationText,
      userId: 1,
    }
  
    this._state.publications.push(publication);
    this._state.newPublicationText = '';
    this._callSubscriber();
  },

  updatePublicationText(newText) {
    this._state.newPublicationText = newText;
    this._callSubscriber();
  },

  addMessage() {
    const id = this._state.messages.length + 1;
  
    const message = {
      id,
      messageUser: 'Iron-man',
      messageAva: 'https://bit.ly/3RGqLZ0',
      message: this._state.newMessageText,
    }
  
    this._state.messages.push(message);
    this._state.newMessageText = '';
    this._callSubscriber();
  },

  updateMessageText(newText) {
    this._state.newMessageText = newText;
    this._callSubscriber();
  },

  subscribe(observer) { 
    this._callSubscriber = observer;
  }
};

export default store;
