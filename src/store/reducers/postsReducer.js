import server from "../../backend/server/server";

const SET_POSTS = 'SET_POSTS';
const SET_USER_POSTS = 'SET_USER_POSTS';
const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

const initialState = {
  userPosts: [],
  posts: [],
  newPostText: ''
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_POSTS:
      return {
        ...state,
        userPosts: action.posts,
      }

    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      }

    case ADD_NEW_POST:
      if (state.newPostText.trim()) {
        const newPost = {
          id: state.userPosts.length + 1,
          userId: action.userId,
          authorAvatar: action.userAvatar,
          text: state.newPostText.trim(),
          likes: 0,
        }
        
        server.post('server/api/post', newPost);

        return {
          ...state,
          userPosts: [...state.userPosts, newPost],
          newPostText: ''
        }
      }

      return {
        ...state,
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

export const setPostsAC = (posts) => ({
  type: SET_POSTS,
  posts
});

export const setUserPostsAC = (posts) => ({
  type: SET_USER_POSTS,
  posts
});

export const addNewPostAC = (userId, userAvatar) => ({
  type: ADD_NEW_POST,
  userId,
  userAvatar
});

export const updatePostTextAC = (text) => ({
  type: UPDATE_POST_TEXT,
  text
});

export default postsReducer;
