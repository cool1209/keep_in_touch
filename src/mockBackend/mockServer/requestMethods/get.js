import { getDialogs } from "../handlers/handleDialogs";
import { getUserFollowingsPage } from "../handlers/handleFollowings";
import { getOnlineStatus } from "../handlers/handleOnlineStatus";
import { getPosts, getProfilePosts } from "../handlers/handlePosts";
import { getProfile } from "../handlers/handleProfile";
import { getUsers } from "../handlers/handleUsers";

const methodGet = (requestQuery, userKey) => {
  const requestQueryParts = requestQuery.split('/');
  const endpoint = requestQueryParts[0];
  const queryParameters = requestQueryParts.slice(1);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (endpoint) {
        case "profile":
          resolve(getProfile(userKey, ...queryParameters));
          break;

        case "users":
          resolve(getUsers(userKey, ...queryParameters));
          break;

        case "posts":
          resolve(getPosts(userKey, ...queryParameters));
          break;

        case "profilePosts":
          resolve(getProfilePosts(userKey, ...queryParameters));
          break;

        case "dialogs":
          resolve(getDialogs(userKey, ...queryParameters));
          break;

        case "followings":
          resolve(getUserFollowingsPage(userKey, ...queryParameters));
          break;

        case "online":
          resolve(getOnlineStatus(...queryParameters));
          break;

        default:
          reject("404 (not found)");
      }
    }, 332);
  });
};

export default methodGet;
