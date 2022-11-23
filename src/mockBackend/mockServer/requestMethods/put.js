import { putProfileStatus } from "../handlers/handleProfile";

const methodPut = (request, body, userKey) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (request) {
        case "status":
          resolve(putProfileStatus(userKey, body));
          break;

        default:
          reject("404 (not found)");
      }
    }, 378);
  });
};

export default methodPut;
