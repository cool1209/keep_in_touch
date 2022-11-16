import { postsAPI } from "../../api/api";
import authUserInStorage from "../functions/handleSessionStorage";

const SET_POSTS = 'SET_POSTS';
const SET_PROFILE_POSTS = 'SET_PROFILE_POSTS';
const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
  profilePosts: [],
  totalProfilePosts: null,
  newPostText: '',

  posts: [],
  totalPosts: null
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_POSTS:
      return {
        ...state,
        profilePosts: action.posts,
        totalProfilePosts: action.totalProfilePosts
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
        profilePosts: [ action.newPost, ...state.profilePosts ],
        newPostText: ''
      }
      
    case UPDATE_NEW_POST_TEXT:
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

export const setProfilePosts = (posts, totalProfilePosts) => ({
  type: SET_PROFILE_POSTS,
  posts,
  totalProfilePosts
});

export const addNewPost = (newPost) => ({
  type: ADD_NEW_POST,
  newPost
});

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text
});

export const getPosts = () => (dispatch) => {
  postsAPI.getPosts()
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

      dispatch(setProfilePosts(items, totalCount));
    }
  });
};

export const sendNewPost = (newPostText) => (dispatch) => {
  if (newPostText.trim()) {
    const handledNewPostText = newPostText.trim();

    postsAPI.sendNewPost(handledNewPostText)
    .then(response => {
      if (response.status === 200) {
        dispatch(getProfilePosts(authUserInStorage.getId()));
      }
    });
  }
  
  dispatch(updateNewPostText(''));
}

export default postsReducer;
