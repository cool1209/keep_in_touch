import methodDelete from "./requestMethods/delete";
import methodPut from "./requestMethods/put";
import methodPost from "./requestMethods/post";
import methodGet from "./requestMethods/get";

const server = {
  get: methodGet,
  post: methodPost,
  put: methodPut,
  delete: methodDelete
};

export default server;
