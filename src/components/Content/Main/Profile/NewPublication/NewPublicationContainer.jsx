import {
  addPublicationCreator,
  updatePublicationTextCreator
} from '../../../../../store/reducers/publicationsReducer';
import { connect } from 'react-redux';
import UserNewPublication from './NewPublication';

const mapStateToProps = (state) => ({
  newPublicationText: state.publications.newPublicationText,
  user: state.users.currentUser 
});

const mapDispatchToProps = (dispatch) => ({
    onUpdatePublicationText: (text) => (
      dispatch(updatePublicationTextCreator(text))
    ),
    onAddPublication: (userId) => (
      dispatch(addPublicationCreator(userId))
    )
  });

const NewPublicationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNewPublication);

export default NewPublicationContainer;
