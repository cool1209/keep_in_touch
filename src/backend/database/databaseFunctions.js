const cities = [
  'New York',
  'Los Angeles',
  'Shaolin',
  'Wakanda',
  'Gotham',
  'Asgard',
  'Atlantis'
];

const names = [
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

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
const getRandomItem = (items) => items[getRandomIndex(items)];

export const getTestUsers = (usersDatabase, userCaunter) => {
  for (let i = 0; i < userCaunter; i++) {
    usersDatabase.push({
      id: usersDatabase.length + 1,
      login: "user" + (i + 1),
      name: getRandomItem(names),
      nickname: getRandomItem(names),
      status: "Offline",
      city: getRandomItem(cities),
      about: null,
      friends: null,
      avatar: "https://bit.ly/3MqaoOw",
      wallpaper: "https://bit.ly/3emGlKL"
    })
  }
}
