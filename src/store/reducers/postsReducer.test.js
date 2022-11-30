import postsReducer, { addNewPost, setPosts } from "./postsReducer";

it("Posts length should be much then 0", () => {
  const action = setPosts(["post"], 11);
  const state = {
    posts: []
  };

  const newState = postsReducer(state, action);

  expect(newState.posts.length > state.posts.length).toBe(true);
});

it("Profile posts length should increase", () => {
  const action = addNewPost("New post");
  const state = {
    profilePosts: []
  };

  const newState = postsReducer(state, action);

  expect(newState.profilePosts.length).toBe(1);
});
