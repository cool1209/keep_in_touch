const data = {
  users: [
    {
      id: 1,
      name: "Iron-man",
      about: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil. After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      friends: [2, 4, 5, 6],
      avatar: "https://bit.ly/3RGqLZ0",
      wallpaper: "https://bit.ly/3dQ4OI8"
    },
    {
      id: 2,
      name: "Spider-man",
      about: "Bitten by a radioactive spider, Peter Parker's arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles. With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.",
      friends: [1],
      avatar: "https://bit.ly/3Ru9Qb3",
      wallpaper: "https://bit.ly/3M3mHzT"
    },
    {
      id: 3,
      name: "Deadpool",
      about: "Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life. Wade Wilson is a small-time mercenary. He meets Vanessa and falls in love. Life is idyllic until one day he is diagnosed with terminal cancer.",
      friends: [4],
      avatar: "https://bit.ly/3eAJZjY",
      wallpaper: "https://images.alphacoders.com/744/74493.jpg"
    },
    {
      id: 4,
      name: "Natasha",
      about: "After Thanos erases half of all life, Romanoff leads the Avengers for five years until she sacrifices herself, successfully helping the Avengers restore trillions of lives across the universe.",
      friends: [1, 5],
      avatar: "https://bit.ly/3S0izm7",
      wallpaper: "https://bit.ly/3SzwSil"
    },
    {
      id: 5,
      name: "Thor",
      about: "In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of mankind, hallowing, and fertility.",
      friends: [1, 4],
      avatar: "https://bit.ly/3SWClzA",
      wallpaper: "https://bit.ly/3SV8OpE"
    },
    {
      id: 6,
      name: "Hulk",
      about: "Bruce Banner lives a life caught between the soft-spoken scientist he's always been and the uncontrollable green monster powered by his rage. Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.",
      friends: [1, 4],
      avatar: "https://bit.ly/3SJU50S",
      wallpaper: "https://bit.ly/3V1QUTY"
    }
  ],
  
  dialogs: [
    { 
      id: 1,
      membersId: [1, 2],
      messages: [
        {
          id: 1,
          authorId: 1,
          message: 'Hello, Spider!',
        },
        {
          id: 2,
          authorId: 2,
          message: 'Hi, Tonny!',
        }
      ]
    },
    {
      id: 2,
      membersId: [1, 4],
      messages: [
        {
          id: 1,
          authorId: 4,
          message: 'Hello, Tonny!',
        },
        {
          id: 2,
          authorId: 1,
          message: 'Good morning, Natasha',
        }
      ]
    },
    {
      id: 3,
      membersId: [2, 3],
      messages: [
        {
          id: 1,
          authorId: 2,
          message: 'Hi, Deadpool!',
        },
        {
          id: 2,
          authorId: 3,
          message: 'Spider? what do you want from me!?',
        },
        {
          id: 3,
          authorId: 2,
          message: 'Oh... Sorry man...',
        }
      ]
    },
    {
      id: 4,
      membersId: [3, 4],
      messages: [
        {
          id: 1,
          authorId: 4,
          message: 'Hi, Deadpool!',
        },
        {
          id: 2,
          authorId: 3,
          message: 'Hi, Natasha',
        },
        {
          id: 3,
          authorId: 4,
          message: "what's going on? :)",
        }
      ]
    },
    { 
      id: 5,
      membersId: [1, 3],
      messages: [
        {
          id: 1,
          authorId: 1,
          message: "Are you Deadpool?!",
        },
        {
          id: 2,
          authorId: 3,
          message: "No :))) \n I'm a little pretty cat :)",
        }
      ]
    },
    {
      id: 6,
      membersId: [2, 6],
      messages: [
        {
          id: 1,
          authorId: 6,
          message: "Who are you?",
        },
        {
          id: 2,
          authorId: 2,
          message: "I am Spider-man. Do you have a questions?",
        }
      ]
    },
    {
      id: 7,
      membersId: [3, 6],
      messages: [
        {
          id: 1,
          authorId: 3,
          message: "Hey, green boy, can you play football with me?))",
        },
        {
          id: 2,
          authorId: 6,
          message: "I play only basketball",
        },
        {
          id: 3,
          authorId: 3,
          message: "oh man... You're so boring...",
        }
      ]
    },
    {
      id: 8,
      membersId: [4, 5],
      messages: [
        {
          id: 1,
          authorId: 4,
          message: "Hi, Thor! Can you help my?",
        },
        {
          id: 2,
          authorId: 5,
          message: "What can I do for you?",
        }
      ]
    },
    {
      id: 9,
      membersId: [5, 6],
      messages: [
        {
          id: 1,
          authorId: 5,
          message: "Hulk :) Hello my dear friend, I glad to see you in this social network!",
        },
        {
          id: 2,
          authorId: 6,
          message: "I glad to see you too, Thor :)",
        }
      ]
    },
    {
      id: 10,
      membersId: [1, 5],
      messages: [
        {
          id: 1,
          authorId: 1,
          message: "Hi, Thor! What about to save the world?)",
        },
        {
          id: 2,
          authorId: 5,
          message: "I'm always ready for it, Iron-man ;)",
        }
      ]
    },
    {
      id: 11,
      membersId: [2, 4],
      messages: [
        {
          id: 1,
          authorId: 2,
          message: "Hi, are you Natasha?)",
        },
        {
          id: 2,
          authorId: 4,
          message: "Yes I am, and you Spider-man, right?",
        },
        {
          id: 3,
          authorId: 2,
          message: "Yes, but sorry... I'm looking for Valera :D",
        }
      ]
    },
    {
      id: 12,
      membersId: [3, 5],
      messages: [
        {
          id: 1,
          authorId: 3,
          message: "Hey, dude! Did you see Thor's hummer?",
        },
        {
          id: 2,
          authorId: 5,
          message: "Yes its mine",
        },
        {
          id: 3,
          authorId: 3,
          message: "No, no, no!))) Now, its mine!)))",
        }
      ]
    },
    {
      id: 13,
      membersId: [4, 6],
      messages: [
        {
          id: 1,
          authorId: 6,
          message: "Good evening, Natasha! You are so beautiful...",
        },
        {
          id: 2,
          authorId: 4,
          message: "Thanks, Hulk :) You are so cute...",
        }
      ]
    },   
    {
      id: 14,
      membersId: [1, 6],
      messages: [
        {
          id: 1,
          authorId: 6,
          message: "Tonny, I have something for you",
        },
        {
          id: 2,
          authorId: 1,
          message: "I listen to you, Hulk",
        }
      ]
    }, 
    {
      id: 15,
      membersId: [2, 5],
      messages: [
        {
          id: 1,
          authorId: 2,
          message: "Thor, when have you seen Valera for last time?",
        },
        {
          id: 2,
          authorId: 5,
          message: "I've never seen that man! Don't ask this question again and again!",
        }
      ]
    },
  ],
  
  publications: [
    {
      id: 1,
      userId: 1,
      publication: "I'm Irom-man and this is my first publication",
      likes: 5,
    },
    {
      id: 2,
      userId: 2,
      publication: "I'm Spider-man and I can make lots of web :)",
      likes: 5,
    },
    {
      id: 3,
      userId: 2,
      publication: "I don't know what I should write here but I think this text is no bad :)",
      likes: 3,
    },
    {
      id: 4,
      userId: 3,
      publication: "I'm Deadpool and I don't know what my name is means...",
      likes: 2,
    },
    {
      id: 5,
      userId: 3,
      publication: "I have two nice 'Beretta' guns and I shoot very well!",
      likes: 6,
    },
    {
      id: 6,
      userId: 3,
      publication: "I'm a master of two Katana swords!!! :D",
      likes: 6,
    },
    {
      id: 7,
      userId: 4,
      publication: "My name is Natasha Romanoff :)",
      likes: 5,
    },
    {
      id: 8,
      userId: 4,
      publication: "If you want to ask me something write me a message :D",
      likes: 5,
    },
    {
      id: 9,
      userId: 6,
      publication: "Yes, I'm a kind man, but when I angry I'm a big green unit :D",
      likes: 2,
    },
    {
      id: 10,
      userId: 5,
      publication: "I have the best hummer, and I can use it. Only I can use this hummer! :)",
      likes: 5,
    },
    {
      id: 11,
      userId: 1,
      publication: "How about to get some money? I have some work for a talented person, write me a message if you want to take this offer ;)",
      likes: 5,
    },
    {
      id: 12,
      userId: 5,
      publication: "Does someone see Loky? I can't find him anywhere... If you see him, let me know where he is.",
      likes: 2,
    },
    {
      id: 13,
      userId: 6,
      publication: "I'm not Shrek! I'm HULK!!! ARRRRRRRRR!!! Don't make me angry!",
      likes: 5,
    },
  ]
};

export default data;
