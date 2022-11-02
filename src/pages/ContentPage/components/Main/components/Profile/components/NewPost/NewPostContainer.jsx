import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendNewPost, updatePostText } from '../../../../../../../../store/reducers/postsReducer';
import NewPost from './NewPost';

const NewPostContainer = ({
  authUser,
  userPosts,
  sendNewPost,
  newPostText,
  updatePostText
}) => {

  const onSendNewPost = () => {
    sendNewPost(newPostText, authUser, userPosts);
  }

  return (
    <NewPost 
      newPostText={newPostText}
      updatePostText={updatePostText}
      onSendNewPost={onSendNewPost}
    />
  );
};

const mapStateToProps = (state) => ({
  authUser: state.auth.authUser,
  userPosts: state.posts.userPosts,
  newPostText: state.posts.newPostText
});

export default compose(
  connect(mapStateToProps, {updatePostText, sendNewPost})
)(NewPostContainer);
