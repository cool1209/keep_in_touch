import { deleteFollowing } from "../handlers/handleFollowings";

const methodDelete = (requestQuery, userKey) => {
  const requestQueryParts = requestQuery.split('/');
  const endpoint = requestQueryParts[0];
  const queryParameters = requestQueryParts.slice(1);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (endpoint) {
        case "unfollow":
          resolve(deleteFollowing(userKey, ...queryParameters));
          break;

        default:
          reject("404 (not found)");
      }
    }, 334);
  });
};

export default methodDelete;
