import {
  getPublications,
  postPublication
} from "../../backend/server";

const SET_PUBLICATIONS = 'SET_PUBLICATIONS';
const ADD_PUBLICATION = 'ADD_PUBLICATION';
const UPDATE_PUBLICATION_TEXT = 'UPDATE_PUBLICATION_TEXT';

const initialState = {
  publications: [],
  newPublicationText: ''
}

const publicationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PUBLICATIONS:
      return {
        publications: getPublications(),
        newPublicationText: ''
      }

    case ADD_PUBLICATION:
      const newPublication = {
        likes: 0,
        publication: state.newPublicationText.trim(),
        userId: action.userId,
      }
      
      if (state.newPublicationText.trim()) {
        postPublication(newPublication);

        return {
          ...state,
          publications: getPublications(),
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

export const setPublicationsAC = () => ({
  type: SET_PUBLICATIONS
});

export const addPublicationAC = (userId) => ({
  type: ADD_PUBLICATION,
  userId
});

export const updatePublicationTextAC = (text) => ({
  type: UPDATE_PUBLICATION_TEXT,
  text
});

export default publicationsReducer;
