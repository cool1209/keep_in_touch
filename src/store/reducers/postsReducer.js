import { postsAPI } from "../../api/postsAPI";
import { changeState } from "../functions/changeState";
import authUserInStorage from "../functions/handleSessionStorage";

const SET_POSTS = "posts/SET_POSTS";
const SET_PROFILE_POSTS = "posts/SET_PROFILE_POSTS";
const ADD_NEW_POST = "posts/ADD_NEW_POST";
const UPDATE_NEW_POST_TEXT = "posts/UPDATE_NEW_POST_TEXT";

const initialState = {
  profilePosts: [],
  totalProfilePosts: null,
  newPostText: "",

  posts: [],
  totalPosts: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_POSTS:
      return {
        ...state,
        profilePosts: action.posts,
        totalProfilePosts: action.totalProfilePosts,
      };

    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
        totalPosts: action.totalPosts,
      };

    case ADD_NEW_POST:
      return {
        ...state,
        profilePosts: [action.payload, ...state.profilePosts],
      };

    case UPDATE_NEW_POST_TEXT:
      return changeState(state, action, "newPostText");

    default:
      return state;
  }
};

export const setPosts = (posts, totalPosts) => ({
  type: SET_POSTS,
  posts,
  totalPosts,
});

export const setProfilePosts = (posts, totalProfilePosts) => ({
  type: SET_PROFILE_POSTS,
  posts,
  totalProfilePosts,
});

export const addNewPost = (payload) => ({
  type: ADD_NEW_POST,
  payload,
});

export const updateNewPostText = (payload) => ({
  type: UPDATE_NEW_POST_TEXT,
  payload,
});

export const fetchPosts = () => async (dispatch) => {
  const response = await postsAPI.fetchPosts();
  if (response.statusCode === 200) {
    const posts = response.data;
    dispatch(setPosts(posts.items, posts.totalCount));
  }
};

export const fetchProfilePosts = (profileId) => async (dispatch) => {
  const response = await postsAPI.fetchProfilePosts(profileId);

  if (response.statusCode === 200) {
    const { items, totalCount } = response.data;

    dispatch(setProfilePosts(items, totalCount));
  }
};

export const sendNewPost = (newPostText) => async (dispatch) => {
  if (newPostText.trim()) {
    const handledNewPostText = newPostText.trim();

    const response = await postsAPI.sendNewPost(handledNewPostText);
    
    if (response.statusCode === 200) {
      dispatch(fetchProfilePosts(authUserInStorage.getId()));
    };
  }

  dispatch(updateNewPostText(""));
};

export default postsReducer;
