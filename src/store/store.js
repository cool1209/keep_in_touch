const store = {
  state: [],

  getState(data) {
    store.state = data;
  },

  renderTree() {
    return null;
  }
  ,
  addPublication() {
    const id = store.state.publications.length + 1;
  
    const publication = {
      id,
      likes: 0,
      publication: store.state.newPublicationText,
      userId: 1,
    }
  
    store.state.publications.push(publication);
    store.state.newPublicationText = '';
    store.renderTree();
  },

  updatePublicationText(newText) {
    store.state.newPublicationText = newText;
    store.renderTree();
  },

  addMessage() {
    const id = store.state.messages.length + 1;
  
    const message = {
      id,
      messageUser: 'Iron-man',
      messageAva: 'https://bit.ly/3RGqLZ0',
      message: store.state.newMessageText,
    }
  
    store.state.messages.push(message);
    store.state.newMessageText = '';
    store.renderTree();
  },

  updateMessageText(newText) {
    store.state.newMessageText = newText;
    store.renderTree();
  },

  subscribe(observer) { 
    store.renderTree = observer;
  }
};

export default store;
