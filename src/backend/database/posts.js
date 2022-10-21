import { getRandomNumber, getTestPosts } from "./dataGenerator/generator";

const posts = [];

getTestPosts(posts, getRandomNumber(100));

export default posts;
