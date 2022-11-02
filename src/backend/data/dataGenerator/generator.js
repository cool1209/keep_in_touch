import { testCities } from "./items/testCities";
import { testPosts } from "./items/testPosts";
import { testStatuses } from "./items/testStatuses";
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
    online: false,
    city: getRandomItem(testCities),
    about: `Let's imagine that there should be information about ${testUser.name}, but since this is a test description of the character, there is only this simple text.`,
    avatar: testUser.avatar,
    wallpaper: getRandomItem(testWallpapers),
  }))

  return usersData.push(...users);
};

export const getTestPosts = (postsData, postCaunter) => {
  for (let i = 0; i < postCaunter; i++) {
    const testPost = {
      id: postsData.length + 1,
      userId: getRandomNumber(testUsers.length) + 1,
      text: getRandomItem(testPosts),
      likes: getRandomNumber(testUsers.length)
    };

    postsData.push(testPost)
  }
};

export const getTestStatuses = (stasusesData, StatusesNumber) => {
  
  for (let i = 0; i < StatusesNumber; i++) {
    const unitId = i + 1
    const profileStatus = {
      id: unitId,
      userId: unitId,
      status: getRandomItem(testStatuses)
    };

    stasusesData.push(profileStatus);
  }
};
