import {
  addNewPublicationAC,
  updatePublicationTextAC
} from '../../../../../../../../store/reducers/publicationsReducer';
import { connect } from 'react-redux';
import UserNewPublication from './NewPublication';

const mapStateToProps = (state) => ({
  newPublicationText: state.publications.newPublicationText,
  user: state.users.user 
});

const mapDispatchToProps = (dispatch) => ({
    onUpdatePublicationText: (text) => {
      dispatch(updatePublicationTextAC(text));
    },
    onAddPublication: (userId, userAvatar) => {
      dispatch(addNewPublicationAC(userId, userAvatar));
    }
  });

const NewPublicationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNewPublication);

export default NewPublicationContainer;
