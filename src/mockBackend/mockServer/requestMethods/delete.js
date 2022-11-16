import { deleteFollowing } from "../handlers/handleFollowings";

const methodDelete = (request, body, userKey) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (request) {
        case "unfollow":
          resolve(deleteFollowing(body, userKey));
          break;

        default:
          reject("404 (not found)");
      }
    }, 334);
  });
};

export default methodDelete;
