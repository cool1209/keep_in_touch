import { addDataItemsTotalCount, getTestPosts } from "./dataFunctions";

const posts = {
  items: [],
  totalCount: null
};

getTestPosts(posts, 40);
addDataItemsTotalCount(posts);

export default posts;
