import server from '../../../../../../../../backend/server/server';

import {
  addNewPost,
  updatePostText
} from '../../../../../../../../store/reducers/postsReducer';
import { connect } from 'react-redux';
import NewPost from './NewPost';

const NewPostContainer = ({
  authUser,
  userPosts,
  newPostText,
  updatePostText,
  addNewPost
}) => {

  const createNewPost = () => {
    return {
      id: userPosts.length + 1,
      userId: authUser.id,
      authorAvatar: authUser.avatar,
      text: newPostText.trim(),
      likes: 0,
    }
  };

  const sendNewPost = () => {
    if (newPostText.trim()) {
      const newPost = createNewPost();
  
      server.post('new-post', newPost)
      .then(response => {
        if (+response.status === 200) {
          addNewPost(newPost);
        }
      });
    }
    
    updatePostText('');
  }

  return (
    <NewPost 
      newPostText={newPostText}
      updatePostText={updatePostText}
      sendNewPost={sendNewPost}
    />
  );
};

const mapStateToProps = (state) => ({
  authUser: state.auth.authUser,
  userPosts: state.posts.userPosts,
  newPostText: state.posts.newPostText
});

export default connect(
  mapStateToProps,
  {
    updatePostText,
    addNewPost
  }
)(NewPostContainer);
