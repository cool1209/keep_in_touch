import { setAuthUser } from "../reducers/authReducer";
import { setDialogs } from "../reducers/dialogsReducer";
import { setFollowings } from "../reducers/followingReducer";
import { setPosts, setProfilePosts, updateNewPostText } from "../reducers/postsReducer";
import { setProfile } from "../reducers/profileReducer";
import { setUsers } from "../reducers/usersReducer";
import { getInitialAuthUser } from "./getInitialAuthUser";
import authUserInStorage from "./handleSessionStorage";

const resetState = () => (dispatch) => {
  authUserInStorage.remove();

  dispatch(setAuthUser(getInitialAuthUser()));
  dispatch(setFollowings([], null, 0));
  dispatch(setPosts([], null));
  dispatch(setDialogs([], null));
  dispatch(setUsers([], null, 0));
  dispatch(setProfile({}));
  dispatch(updateNewPostText(''));
  dispatch(setProfilePosts([], null));
};

export default resetState;
