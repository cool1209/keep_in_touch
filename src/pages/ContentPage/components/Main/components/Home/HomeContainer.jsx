import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => ({
  publications: state.publications.publications,
});

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;
