import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => ({
  publications: state.publications.publications,
  users: state.users.allUsers
});

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;
