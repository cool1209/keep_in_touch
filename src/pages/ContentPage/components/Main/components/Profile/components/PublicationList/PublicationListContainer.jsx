import { connect } from 'react-redux';
import PublicationList from './PublicationList'

const mapStateToProps = (state) => ({
  publications: state.publications.publications
    .filter(publication => publication.author === state.user.user.login)
});

const PublicationListContainer = connect(mapStateToProps)(PublicationList);

export default PublicationListContainer;
