import { testCities } from "./items/testCities";
import { testPosts } from "./items/testPosts";
import { testUsers } from "./items/testUsers";
import { testWallpapers } from "./items/testWallpaper";

const getRandomIndex = (array) => Math.floor(Math.random() * array.length);
const getRandomItem = (items) => items[getRandomIndex(items)];
const getRandomNumber = (number) => Math.floor(Math.random() * number);

export const getTestUsers = (users, userCaunter) => {
  for (let i = 0; i < userCaunter; i++) {
    const userId = users.length + 1;
    const user = getRandomItem(testUsers);
    const testUser = {
      id: userId,
      login: `user${userId}`,
      name: user.name,
      nickname: user.name,
      status: "Offline",
      city: getRandomItem(testCities),
      about: `Let's imagine that there should be information about ${user.name}, but since this is a test description of the character, there is only this simple text.`,
      friends: [],
      avatar: user.avatar,
      wallpaper: getRandomItem(testWallpapers)
    }

    users.push(testUser);
  }
};

export const getTestPosts = (posts, postCaunter) => {
  for (let i = 0; i < postCaunter; i++) {
    const testPost = {
      id: posts.length + 1,
      userId: getRandomNumber(21) + 1,
      text: getRandomItem(testPosts),
      likes: getRandomNumber(20)
    };

    posts.push(testPost)
  }
};
