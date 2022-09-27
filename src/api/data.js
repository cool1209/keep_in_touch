const data = {
  users: [
    {
      id: 1,
      name: "Iron-man",
      about: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil. After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      friends: [
        {
          userId: 2
        },
        {
          userId: 3
        },
      ],
      avatar: "https://bit.ly/3RGqLZ0",
      wallpaper: "https://bit.ly/3wXgbnV"
    },
    {
      id: 2,
      name: "Spider-man",
      about: "Bitten by a radioactive spider, Peter Parker's arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles. With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.",
      friends: [
        {
          userId: 1
        },
        {
          userId: 3
        }
      ],
      avatar: "https://bit.ly/3Rm5F1M",
      wallpaper: "https://bit.ly/3wXgbnV"
    },
    {
      id: 3,
      name: "Deathpull",
      about: "Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life. Wade Wilson is a small-time mercenary. He meets Vanessa and falls in love. Life is idyllic until one day he is diagnosed with terminal cancer.",
      friends: [
        {
          userId: 1
        },
        {
          userId: 2
        }
      ],
      avatar: "https://bit.ly/3eAJZjY",
      wallpaper: "https://bit.ly/3wXgbnV"
    },
    {
      id: 4,
      name: "Natasha",
      about: "After Thanos erases half of all life, Romanoff leads the Avengers for five years until she sacrifices herself, successfully helping the Avengers restore trillions of lives across the universe.",
      friends: [
        {
          userId: 1
        },
        {
          userId: 3
        }
      ],
      avatar: "https://bit.ly/3S0izm7",
      wallpaper: "https://bit.ly/3wXgbnV"
    }
  ],
  publicationsPage: {
    publications: [
      {
        id: 1,
        likes: 2,
        publication: "It is my first publication and I don't know what I should write here but I thing this text is no bad :)",
        userId: 1,
      },
      {
        id: 2,
        likes: 1,
        publication: 'It is my first publication and I don\'t know what I should write here but I thing this text is no bad :)',
        userId: 1,
      },
    ],
    newPublicationText: "",
  },

  messagesPage: {
    dialogs: [
      {
        id: 2,
        name: 'Spider-man',
        avatar: 'https://bit.ly/3Rm5F1M'
      },
      {
        id: 3,
        name: 'Deadpool',
        avatar: 'https://bit.ly/3eAJZjY'
      },
      {
        id: 4,
        name: 'Natasha',
        avatar: 'https://bit.ly/3S0izm7'
      }
    ],
    messages: [
      {
        id: 1,
        messageUser: 'Spider-man',
        messageAva: 'https://bit.ly/3Rm5F1M',
        message: 'Hello man, how are you?',
      },
      {
        id: 2,
        messageUser: 'Iron-man',
        messageAva: 'https://bit.ly/3RGqLZ0',
        message: 'I am five, what about you?',
      },
      {
        id: 3,
        messageUser: 'Spider-man',
        messageAva: 'https://bit.ly/3Rm5F1M',
        message: 'Not bad too',
      },
    ],
    newMessageText: ""
  }
  
  
}

export default data;
