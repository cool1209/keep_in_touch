import { postsAPI } from "../../api/api";

const SET_POSTS = 'SET_POSTS';
const SET_USER_POSTS = 'SET_USER_POSTS';
const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

const initialState = {
  userPosts: [],
  totalUserPosts: null,
  newPostText: '',

  posts: [],
  totalPosts: null
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_POSTS:
      return {
        ...state,
        userPosts: action.posts,
        totalUserPosts: action.totalUserPosts
      }

    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
        totalPosts: action.totalPosts
      }

    case ADD_NEW_POST:
      return {
        ...state,
        userPosts: [ action.newPost, ...state.userPosts ],
        newPostText: ''
      }
      
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      }

    default:
      return state;
  }
}

export const setPosts = (posts, totalPosts) => ({
  type: SET_POSTS,
  posts,
  totalPosts
});

export const setUserPosts = (posts, totalUserPosts) => ({
  type: SET_USER_POSTS,
  posts,
  totalUserPosts
});

export const addNewPost = (newPost) => ({
  type: ADD_NEW_POST,
  newPost
});

export const updatePostText = (text) => ({
  type: UPDATE_POST_TEXT,
  text
});

export const getPosts = (userId) => (dispatch) => {
  postsAPI.getPosts({userId: userId})
  .then(response => {
    if (response.status === 200) {
      const posts = response.data;
      dispatch(setPosts(posts.items, posts.totalCount));
    }
  });
};

export const getProfilePosts = (profileId) => (dispatch) => {
  postsAPI.getProfilePosts(profileId)
  .then(response => {
    if (response.status === 200) {
      const { items, totalCount } = response.data;

      dispatch(setUserPosts(items, totalCount));
    }
  });
};

export const sendNewPost = (
  postText,
  authUser,
  userPosts
) => (dispatch) => {

  if (postText.trim()) {
    const newPost = {
      id: userPosts.length + 1,
      userId: authUser.id,
      authorAvatar: authUser.avatar,
      text: postText.trim(),
      likes: 0,
    };

    postsAPI.sendNewPost(newPost)
    .then(response => {
      if (response.status === 200) {
        dispatch(addNewPost(newPost));
      }
    });
  }
  
  dispatch(updatePostText(''));
}

export default postsReducer;
