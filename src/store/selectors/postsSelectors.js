export const getPosts = (state) => (
  state.posts.posts
);

export const getTotalPosts = (state) => (
  state.posts.totalPosts
);

export const getIsPostsPosts = (state) => (
  getTotalPosts(state)
);

export const getProfilePosts = (state) => (
  state.posts.profilePosts
);

export const getTotalProfilePosts = (state) => (
  state.posts.totalProfilePosts
);

export const getNewPostText = (state) => (
  state.posts.newPostText
);
