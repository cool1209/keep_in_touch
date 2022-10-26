import { getTestUsers } from "./dataGenerator/generator";

const users = [];

getTestUsers(users);

users[0].followings = [14, 25, 47];
users[2].followings = [10, 21, 36, 48];

export default users;
