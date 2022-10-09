import {
  addPublicationAC,
  updatePublicationTextAC
} from '../../../../../../../../store/reducers/publicationsReducer';
import { connect } from 'react-redux';
import UserNewPublication from './NewPublication';

const mapStateToProps = (state) => ({
  newPublicationText: state.publications.newPublicationText,
  user: state.users.loginUser 
});

const mapDispatchToProps = (dispatch) => ({
    onUpdatePublicationText: (text) => (
      dispatch(updatePublicationTextAC(text))
    ),
    onAddPublication: (userId) => (
      dispatch(addPublicationAC(userId))
    )
  });

const NewPublicationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNewPublication);

export default NewPublicationContainer;
