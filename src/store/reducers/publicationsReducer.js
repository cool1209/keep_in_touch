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
      
      const newPublication = {
        id: publicationId,
        likes: 0,
        publication: state.newPublicationText.trim(),
        userId: action.userId,
      }
      
      if (state.newPublicationText.trim()) {
        return {
          ...state,
          publications: [ ...state.publications, newPublication ],
          newPublicationText: ''
        }
      }

      return {
        ...state,
        newPublicationText: ''
      }
      
    case UPDATE_PUBLICATION_TEXT:
      return {
        ...state,
        newPublicationText: action.text
      }

    default:
      return state;
  }
}

export const addPublicationCreator = (userId) => ({
  type: ADD_PUBLICATION,
  userId
});

export const updatePublicationTextCreator = (text) => ({
  type: UPDATE_PUBLICATION_TEXT,
  text
});

export default publicationsReducer;
