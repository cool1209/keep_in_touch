import data from "../../data/data.js";
const ADD_PUBLICATION = 'ADD_PUBLICATION';
const UPDATE_PUBLICATION_TEXT = 'UPDATE_PUBLICATION_TEXT';

const initialState = {
  publications: data.publications,
  newPublicationText: ''
}

const publicationsReducer = (state = initialState, action) => {
  const stateCopy = {...state}
  
  switch (action.type) {
    case ADD_PUBLICATION:
      stateCopy.publications = [...state.publications];
      const publicationId = state.publications.length + 1;
      const publication = {
        id: publicationId,
        likes: 0,
        publication: state.newPublicationText.trim(),
        userId: action.userId,
      }
      
      if (state.newPublicationText.trim()) {
        stateCopy.publications.push(publication);
        stateCopy.newPublicationText = '';
      }

      stateCopy.newPublicationText = '';
      
      return stateCopy;
      
      case UPDATE_PUBLICATION_TEXT:
        stateCopy.newPublicationText = action.text;

        return stateCopy;

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
