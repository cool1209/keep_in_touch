import server from "../../backend/server";

const SET_PUBLICATIONS = 'SET_PUBLICATIONS';
const SET_USER_PUBLICATIONS = 'SET_USER_PUBLICATIONS';
const ADD_NEW_PUBLICATION = 'ADD_NEW_PUBLICATION';
const UPDATE_PUBLICATION_TEXT = 'UPDATE_PUBLICATION_TEXT';

const initialState = {
  userPublications: [],
  publications: [],
  newPublicationText: ''
}

const publicationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PUBLICATIONS:
      return {
        ...state,
        userPublications: action.publications,
      }

    case SET_PUBLICATIONS:
      return {
        ...state,
        publications: action.publications,
      }

    case ADD_NEW_PUBLICATION:
      if (state.newPublicationText.trim()) {
        const newPublication = {
          id: state.userPublications.length + 1,
          userId: action.userId,
          authorAvatar: action.userAvatar,
          publication: state.newPublicationText.trim(),
          likes: 0,
        }
        
        server.post('server/api/publication', newPublication);

        return {
          ...state,
          userPublications: [...state.userPublications, newPublication],
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

export const setPublicationsAC = (publications) => ({
  type: SET_PUBLICATIONS,
  publications
});

export const setUserPublicationsAC = (publications) => ({
  type: SET_USER_PUBLICATIONS,
  publications
});

export const addNewPublicationAC = (userId, userAvatar) => ({
  type: ADD_NEW_PUBLICATION,
  userId,
  userAvatar
});

export const updatePublicationTextAC = (text) => ({
  type: UPDATE_PUBLICATION_TEXT,
  text
});

export default publicationsReducer;
