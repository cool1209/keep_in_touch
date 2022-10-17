const testCities = [
  'New York',
  'Los Angeles',
  'Shaolin',
  'Wakanda',
  'Gotham',
  'Asgard',
  'Atlantis'
];

const testNames = [
  'Tyrande',
  'Mukla',
  'Murky',
  'Brann',
  'Cairne',
  'Cariel',
  'Cornelius',
  'Baine',
  'Smite',
  'Finley',
  'Sneed',
  'Tess',
  'Vanessa',
  'Samuro',
  'Sylvanas',
  'Aranna',
  'Millhouse',
  'Ariorh',
  'Nemsy',
  'Rogers'
];

const testPosts = [
  'The secret of getting ahead is getting started.',
  'When something is important enough, you do it even if the odds are not in your favor.',
  'If you\'re going through hell, keep going.',
  'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
  'It does not matter how slowly you go as long as you do not stop.',
  'It always seems impossible until it\'s done.',
  'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
  'Good, better, best. Never let it rest. \'Til your good is better and your better is best.',
  'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
  'With the new day comes new strength and new thoughts.',
  'What you do today can improve all your tomorrows.',
  'Life is 10% what happens to you and 90% how you react to it.',
  'If you can dream it, you can do it.',
  'Start where you are. Use what you have. Do what you can.',
  'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
  'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.',
  'Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.',
  'Where there is no vision, there is no hope.',
  'When you can\'t make them see the light, make them feel the heat.',
  'Leadership is the capacity to translate vision into reality.'
];

const getRandomIndex = (array) => Math.floor(Math.random() * array.length);
const getRandomItem = (items) => items[getRandomIndex(items)];
const getRandomNumber = (number) => Math.floor(Math.random() * number);

export const getTestUsers = (users, userCaunter) => {
  for (let i = 0; i < userCaunter; i++) {
    const userId = users.items.length + 1;
    const name = getRandomItem(testNames);
    const city = getRandomItem(testCities);

    const testUser = {
      id: userId,
      login: `user${userId}`,
      name,
      nickname: name,
      status: "Offline",
      city,
      about: null,
      friends: null,
      avatar: "https://bit.ly/3MqaoOw",
      wallpaper: "https://bit.ly/3emGlKL"
    }

    users.items.push(testUser);
  }
};

export const getTestPosts = (posts, postCaunter) => {
  for (let i = 0; i < postCaunter; i++) {
    const testPost = {
      id: posts.items.length + 1,
      userId: getRandomNumber(21) + 1,
      text: getRandomItem(testPosts),
      likes: getRandomNumber(20)
    };

    posts.items.push(testPost)
  }
};

export const addDataItemsTotalCount = (data) => {
  data.totalCount = data.items.length;
}
