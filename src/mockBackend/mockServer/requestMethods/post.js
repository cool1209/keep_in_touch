import { postNewMessage } from "../handlers/handleDialogs";
import { postFollowing } from "../handlers/handleFollowings";
import { postNewPost } from "../handlers/handlePosts";

const methodPost = (request, body, userKey) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (request) {
        case "post":
          resolve(postNewPost(body, userKey));
          break;

        case "message":
          resolve(postNewMessage(body, userKey));
          break;

        case "follow":
          resolve(postFollowing(body, userKey));
          break;

        default:
          reject("404 (not found)");
      }
    }, 332);
  });
};

export default methodPost;
