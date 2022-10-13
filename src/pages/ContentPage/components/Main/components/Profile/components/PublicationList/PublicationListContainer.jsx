import { connect } from 'react-redux';
import { setUserPublicationsAC } from '../../../../../../../../store/reducers/publicationsReducer';
import PublicationList from './PublicationList'

const mapStateToProps = (state) => ({
  publications: state.publications.userPublications,
  user: state.users.user
});

const mapDispatchToProps = (dispatch) => ({
  setUserPublications: (publications) => {
    dispatch(setUserPublicationsAC(publications));
  }
});

const PublicationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicationList);

export default PublicationListContainer;
