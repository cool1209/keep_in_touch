import { testCities } from "./items/testCities";
import { testPosts } from "./items/testPosts";
import { testUsers } from "./items/testUsers";
import { testWallpapers } from "./items/testWallpaper";

const getRandomIndex = (array) => Math.floor(Math.random() * array.length);
const getRandomItem = (items) => items[getRandomIndex(items)];
export const getRandomNumber = (number) => Math.floor(Math.random() * number);

export const getTestUsers = (usersData) => {
  const users = testUsers.map((testUser, index) => ({
    id: index + 1,
    login: `user${index + 1}`,
    name: testUser.name,
    status: "Offline",
    city: getRandomItem(testCities),
    about: `Let's imagine that there should be information about ${testUser.name}, but since this is a test description of the character, there is only this simple text.`,
    avatar: testUser.avatar,
    wallpaper: getRandomItem(testWallpapers)
  }))

  return usersData.push(...users);
};

export const getTestPosts = (posts, postCaunter) => {
  for (let i = 0; i < postCaunter; i++) {
    const testPost = {
      id: posts.length + 1,
      userId: getRandomNumber(testUsers.length) + 1,
      text: getRandomItem(testPosts),
      likes: getRandomNumber(testUsers.length)
    };

    posts.push(testPost)
  }
};
