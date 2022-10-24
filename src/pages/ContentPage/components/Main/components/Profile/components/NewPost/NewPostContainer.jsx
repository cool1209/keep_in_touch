import {
  addNewPost,
  updatePostText
} from '../../../../../../../../store/reducers/postsReducer';
import { connect } from 'react-redux';
import NewPost from './NewPost';

const mapStateToProps = (state) => ({
  newPostText: state.posts.newPostText,
  user: state.user.authorizedUser
});

export default connect(
  mapStateToProps,
  {
    updatePostText,
    addNewPost
  }
)(NewPost);
