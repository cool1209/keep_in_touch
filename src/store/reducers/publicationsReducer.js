import data from "../../data/data.js";
const ADD_PUBLICATION = 'ADD_PUBLICATION';
const UPDATE_PUBLICATION_TEXT = 'UPDATE_PUBLICATION_TEXT';

const initialState = {
  publications: data.publications,
  newPublicationText: ''
}

const publicationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PUBLICATION:
      const publicationId = state.publications.length + 1;
      const publication = {
        id: publicationId,
        likes: 0,
        publication: state.newPublicationText.trim(),
        userId: action.userId,
      }
      
      if (state.newPublicationText.trim()) {
        state.publications.push(publication);
        state.newPublicationText = '';
      }

      state.newPublicationText = '';
      
      return state;
      
      case UPDATE_PUBLICATION_TEXT:
        state.newPublicationText = action.publicationText;
      return state;

    default:
      return state;
  }
}

export const addPublicationCreator = (userId) => ({
  type: ADD_PUBLICATION,
  userId
});

export const updatePublicationTextCreator = (publicationText) => ({
  type: UPDATE_PUBLICATION_TEXT,
  publicationText
});

export default publicationsReducer;
