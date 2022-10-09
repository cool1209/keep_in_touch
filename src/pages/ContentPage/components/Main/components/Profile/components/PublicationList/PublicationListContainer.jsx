import { connect } from 'react-redux';
import PublicationList from './PublicationList'

const mapStateToProps = (state) => ({
  user: state.users.loginUser,
  publications: state.publications.publications
});

const PublicationListContainer = connect(mapStateToProps)(PublicationList);

export default PublicationListContainer;
