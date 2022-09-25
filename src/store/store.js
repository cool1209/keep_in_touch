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
      case 'ADD-PUBLICATION':
        const publicationId = this._state.publications.length + 1;
        const publication = {
          id: publicationId,
          likes: 0,
          publication: this._state.newPublicationText,
          userId: 1,
        }
        
        if (this._state.newPublicationText) {
          this._state.publications.push(publication);
          this._state.newPublicationText = '';
          this._callSubscriber();
        }
        return;

      case 'UPDATE-PUBLICATION-TEXT':
        this._state.newPublicationText = action.payload;
        this._callSubscriber();
        return;

      case 'ADD-MESSAGE':
        const messageId = this._state.messages.length + 1;
  
        const message = {
          id: messageId,
          messageUser: 'Iron-man',
          messageAva: 'https://bit.ly/3RGqLZ0',
          message: this._state.newMessageText,
        }
      
        if (this._state.newMessageText) {
          this._state.messages.push(message);
          this._state.newMessageText = '';
          this._callSubscriber();
        }
        return;

      case 'UPDATE-MESSAGE-TEXT':
        this._state.newMessageText = action.payload;
        this._callSubscriber();
        return;

      default:
        return this._state
    }
  }
};

export default store;
