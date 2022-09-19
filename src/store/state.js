import data from "./data";
import render from "./render";

const state = data;

export const addPublication = () => {
  const id = state.publications.length + 1;

  const publication = {
    id,
    likes: 0,
    publication: state.newPublicationText,
    userId: 1,
  }

  state.publications.push(publication);
  state.newPublicationText = '';
  render(state);
}

export const updatePublicationText = (newText) => {
  state.newPublicationText = newText;
  render(state);
}

export const addMessage = () => {
  const id = state.messages.length + 1;

  const message = {
    id,
    messageUser: 'Iron-man',
    messageAva: 'https://bit.ly/3RGqLZ0',
    message: state.newMessageText,
  }

  state.messages.push(message);
  state.newMessageText = '';
  render(state);
}

export const updateMessageText = (newText) => {
  state.newMessageText = newText;
  render(state);
}

export default state;
