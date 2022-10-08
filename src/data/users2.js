const users2 = [
  {
    id: 1,
    name: "Iron-man",
    status: "offline",
    city: "New York",
    about: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil. After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    friends: [2, 4, 5, 6],
    avatar: "https://bit.ly/3RGqLZ0",
    wallpaper: "https://bit.ly/3dQ4OI8"
  },
  {
    id: 2,
    name: "Spider-man",
    status: "online",
    city: "New York",
    about: "Bitten by a radioactive spider, Peter Parker's arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles. With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.",
    friends: [1],
    avatar: "https://bit.ly/3SQEqgj",
    wallpaper: "https://bit.ly/3M3mHzT"
  },
  {
    id: 3,
    name: "Deadpool",
    status: "offline",
    city: "New York",
    about: "Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life. Wade Wilson is a small-time mercenary. He meets Vanessa and falls in love. Life is idyllic until one day he is diagnosed with terminal cancer.",
    friends: [4],
    avatar: "https://bit.ly/3eAJZjY",
    wallpaper: "https://images.alphacoders.com/744/74493.jpg"
  },
  {
    id: 4,
    name: "Natasha_Romanoff",
    status: "online",
    city: "New York",
    about: "After Thanos erases half of all life, Romanoff leads the Avengers for five years until she sacrifices herself, successfully helping the Avengers restore trillions of lives across the universe.",
    friends: [1, 5, 7],
    avatar: "https://bit.ly/3S0izm7",
    wallpaper: "https://bit.ly/3fGJPIk"
  },
  {
    id: 5,
    name: "Thor",
    status: "online",
    city: "Asgard",
    about: "In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of mankind, hallowing, and fertility.",
    friends: [1, 4],
    avatar: "https://bit.ly/3SWClzA",
    wallpaper: "https://bit.ly/3SV8OpE"
  },
  {
    id: 6,
    name: "Hulk",
    status: "offline",
    city: "New York",
    about: "Bruce Banner lives a life caught between the soft-spoken scientist he's always been and the uncontrollable green monster powered by his rage. Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.",
    friends: [1, 4],
    avatar: "https://bit.ly/3SJU50S",
    wallpaper: "https://bit.ly/3V1QUTY"
  },
  {
    id: 7,
    name: "Doctor_Strange",
    status: "offline",
    city: "New York",
    about: "Doctor Stephen Vincent Strange, M.D., Ph.D is a Master of the Mystic Arts.",
    friends: [4],
    avatar: "https://bit.ly/3VgbNLE",
    wallpaper: "https://bit.ly/3Va1c4F"
  },
  {
    id: 8,
    name: "Loki",
    status: "online",
    city: "Asgard",
    about: "Loki is considered a trickster god, known for being neither fully good nor evil since his main aim was always to create chaos. Despite his father being a giant, he is still counted a member of the Aesir—a tribe of deities including Odin, Frigg, Tyr, and Thor.",
    friends: [4],
    avatar: "https://bit.ly/3CfgJHT",
    wallpaper: "https://bit.ly/3fTGsht"
  },
  {
    id: 9,
    name: "Aquaman",
    status: "offline",
    city: "Atlantis",
    about: "Arthur Curry is the King of Atlantis, the firstborn son of Queen Atlanna, the older maternal half-brother of Orm Marius, and a member of the Justice League, as well as the superhero known to the world as the Aquaman.",
    friends: [10, 13],
    avatar: "https://bit.ly/3CiSEjt",
    wallpaper: "https://bit.ly/3Va5xVB"
  },
  {
    id: 10,
    name: "Superman",
    status: "online",
    city: "Gotham",
    about: "Superman was born on the fictional planet Krypton and was named Kal-El. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm. His ship landed in the American countryside, near the fictional town of Smallville.",
    friends: [9, 13],
    avatar: "https://bit.ly/3RMp2AL",
    wallpaper: "https://bit.ly/3Evsb4L"
  },
  {
    id: 11,
    name: "Kung_Lao",
    status: "offline",
    city: "Shaolin",
    about: "Of the Earthrealm warriors, Kung Lao is the most outspoken pacifist, although he will not hesitate to severely punish those who attack him, Earthrealm, or his friends. His trademark is his Razor-Rimmed Hat, which he can employ quite powerfully and effectively in combat.",
    friends: [],
    avatar: "https://bit.ly/3CiHkDR",
    wallpaper: "https://bit.ly/3S1dzxn"
  },
  {
    id: 12,
    name: "Yuri_Boyka",
    status: "offline",
    city: "Los Angeles",
    about: "Yuri Boyka is a professional prison fighter who appears as the main antagonist in the Undisputed-2 film, and later became the main protagonist of the third film to the latest Undisputed film.",
    friends: [],
    avatar: "https://bit.ly/3Es5tuv",
    wallpaper: "https://bit.ly/3EAcB7Q"
  },
  {
    id: 13,
    name: "Batman",
    status: "online",
    city: "Gotham",
    about: "In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman.",
    friends: [9, 10],
    avatar: "https://bit.ly/3EvZ4ye",
    wallpaper: "https://bit.ly/3Cj5eiz"
  },
  {
    id: 14,
    name: "Harley_Quinn",
    status: "online",
    city: "Gotham",
    about: "Harley Quinn's abilities include expert gymnastic skills, proficiency in weapons and hand-to-hand combat, complete unpredictability, immunity to toxins, and enhanced strength, agility, and durability. Quinn often wields clown-themed gag weapons, with an oversized mallet being her signature weapon.",
    friends: [15],
    avatar: "https://bit.ly/3CFqFf9",
    wallpaper: "https://bit.ly/3CIFv4v"
  },
  {
    id: 15,
    name: "Joker",
    status: "online",
    city: "Gotham",
    about: "The Joker possesses no superhuman abilities, instead using his expertise in chemical engineering to develop poisonous or lethal concoctions and thematic weaponry, including razor-tipped playing cards, deadly joy buzzers, and acid-spraying lapel flowers.",
    friends: [14],
    avatar: "https://bit.ly/3CloKuU",
    wallpaper: "https://bit.ly/3CjwwVZ"
  },
  {
    id: 16,
    name: "",
    status: "",
    city: "",
    about: "",
    friends: [],
    avatar: "",
    wallpaper: ""
  },
  {
    id: 17,
    name: "",
    status: "",
    city: "",
    about: "",
    friends: [],
    avatar: "",
    wallpaper: ""
  },
  {
    id: 18,
    name: "",
    status: "",
    city: "",
    about: "",
    friends: [],
    avatar: "",
    wallpaper: ""
  },
  {
    id: 19,
    name: "",
    status: "",
    city: "",
    about: "",
    friends: [],
    avatar: "",
    wallpaper: ""
  },
  {
    id: 20,
    name: "",
    status: "",
    city: "",
    about: "",
    friends: [],
    avatar: "",
    wallpaper: ""
  },
  {
    id: 21,
    name: "",
    status: "",
    city: "",
    about: "",
    friends: [],
    avatar: "",
    wallpaper: ""
  },
  {
    id: 22,
    name: "",
    status: "",
    city: "",
    about: "",
    friends: [],
    avatar: "",
    wallpaper: ""
  },
  {
    id: 23,
    name: "",
    status: "",
    city: "",
    about: "",
    friends: [],
    avatar: "",
    wallpaper: ""
  },
  {
    id: 24,
    name: "",
    status: "",
    city: "",
    about: "",
    friends: [],
    avatar: "",
    wallpaper: ""
  }
];

export default users2;
