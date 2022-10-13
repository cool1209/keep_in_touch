import { connect } from 'react-redux';
import { setPublicationsAC } from '../../../../../../store/reducers/publicationsReducer';
import Home from './Home';

const mapStateToProps = (state) => ({
  publications: state.publications.publications,
});

const mapDispatchToProps = (dispatch) => ({
  setPublications: (publications) => {
    dispatch(setPublicationsAC(publications));
  }
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
