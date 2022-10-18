import {
  addNewPostAC,
  updatePostTextAC
} from '../../../../../../../../store/reducers/postsReducer';
import { connect } from 'react-redux';
import NewPost from './NewPost';

const mapStateToProps = (state) => ({
  newPostText: state.posts.newPostText,
  user: state.loginUser.user 
});

const mapDispatchToProps = (dispatch) => ({
    onUpdatePostText: (text) => {
      dispatch(updatePostTextAC(text));
    },
    onAddPost: (userId, useravatar) => {
      dispatch(addNewPostAC(userId, useravatar));
    }
  });

const NewPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);

export default NewPostContainer;
