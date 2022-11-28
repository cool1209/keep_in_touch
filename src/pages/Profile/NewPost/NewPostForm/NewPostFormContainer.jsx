import { connect } from 'react-redux';
import { compose } from 'redux';

import { sendNewPost, updateNewPostText } from '../../../../store/reducers/postsReducer';
import { getNewPostText } from '../../../../store/selectors/postsSelectors';
import NewPostForm from './NewPostForm';

const NewPostFormContainer = ({
  newPostText,
  updateNewPostText,
  sendNewPost,
}) => {

  const handlePostText = (e) => {
    updateNewPostText(e.target.value)
  }

  const handlePostForm = (e) => {
    e.preventDefault();
    sendNewPost(newPostText);
  }

  return (
    <NewPostForm 
      newPostText={newPostText}
      onHandlePostText={handlePostText}
      onHandlePostForm={handlePostForm}
    />
  );
};

const mapStateToProps = (state) => ({
  newPostText: getNewPostText(state)
});

export default compose(
  connect(mapStateToProps, {updateNewPostText, sendNewPost})
)(NewPostFormContainer);
