const ADD_PUBLICATION = 'ADD_PUBLICATION';
const UPDATE_PUBLICATION_TEXT = 'UPDATE_PUBLICATION_TEXT';

const publicationsReducer = (state, action) => {
  const publicationsPage = state.publicationsPage;

  switch (action.type) {
    case ADD_PUBLICATION:
      const publicationId = state.publications.length + 1;
      const publication = {
        id: publicationId,
        likes: 0,
        publication: publicationsPage.newPublicationText,
        userId: state.user.id,
      }
      
      if (publicationsPage.newPublicationText) {
        state.publications.push(publication);
        publicationsPage.newPublicationText = '';
      }

      return state;

    case UPDATE_PUBLICATION_TEXT:
      publicationsPage.newPublicationText = action.payload;
      return state;

    default:
      return state;
  }
}

export const addPublicationCreator = () => ({
  type: ADD_PUBLICATION
});

export const updatePublicationTextCreator = (text) => ({
  type: UPDATE_PUBLICATION_TEXT,
  payload: text
});

export default publicationsReducer;
