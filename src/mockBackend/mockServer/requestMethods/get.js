import { getAuth } from "../handlers/handleAuth";
import { getDialogs } from "../handlers/handleDialogs";
import { getFollowings } from "../handlers/handleFollowings";
import { getOnlineStatus } from "../handlers/handleOnlineStatus";
import { getPosts, getProfilePosts } from "../handlers/handlePosts";
import { getProfile } from "../handlers/handleProfile";
import { getUsers } from "../handlers/handleUsers";

const methodGet = (request, body, userKey) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (request) {
        case "login":
          resolve(getAuth(body, userKey));
          break;

        case "profile":
          resolve(getProfile(body, userKey));
          break;

        case "users":
          resolve(getUsers(body, userKey));
          break;

        case "posts":
          resolve(getPosts(body, userKey));
          break;

        case "profile-posts":
          resolve(getProfilePosts(body, userKey));
          break;

        case "dialogs":
          resolve(getDialogs(body, userKey));
          break;

        case "followings":
          resolve(getFollowings(body, userKey));
          break;

        case "online":
          resolve(getOnlineStatus(body, userKey));
          break;

        default:
          reject("404 (not found)");
      }
    }, 332);
  });
};

export default methodGet;
