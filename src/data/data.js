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
      wallpaper: "https://bit.ly/3dQ4OI8"
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
      wallpaper: "https://bit.ly/3frTane"
    },
    {
      id: 3,
      name: "Deadpool",
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
      wallpaper: "https://bit.ly/3BULGki"
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
      wallpaper: "https://bit.ly/3RlD7F0"
    }
  ],
  
  dialogs: [
    { 
      id: 1,
      members: [1, 2],
      messages: [
        {
          id: 1,
          member: 1,
          message: 'Hello man, how are you?',
        },
        {
          id: 2,
          member: 2,
          message: 'I am five, what about you?',
        },
        {
          id: 3,
          member: 1,
          message: 'Not bad too',
        },
        {
          id: 4,
          member: 2,
          message: 'Ok. See you soon!',
        }
      ]
    },
    {
      id: 2,
      members: [1, 4],
      messages: [
        {
          id: 1,
          member: 4,
          message: 'Hello man, how are you?',
        },
        {
          id: 2,
          member: 1,
          message: 'I am fine',
        },
        {
          id: 3,
          member: 4,
          message: 'What about you?',
        },
      ]
    },
    {
      id: 3,
      members: [2, 3],
      messages: [
        {
          id: 1,
          member: 2,
          message: 'Hello man, how are you?',
        },
        {
          id: 2,
          member: 3,
          message: 'I am five, what about you?',
        },
        {
          id: 3,
          member: 2,
          message: 'Not bad too',
        },
      ]
    },
    {
      id: 4,
      members: [3, 4],
      messages: [
        {
          id: 1,
          member: 4,
          message: 'Hello man, how are you?',
        },
        {
          id: 2,
          member: 3,
          message: 'I am five, what about you?',
        },
        {
          id: 3,
          member: 4,
          message: 'Not bad too',
        },
      ]
    },
  ],
  
  publications: [
    {
      id: 1,
      userId: 1,
      publication: "I'm Irom-man ant this is my first publication",
      likes: 7,
    },
    {
      id: 2,
      userId: 1,
      publication: "I don't know what I should write here but I thing this text is no bad :)",
      likes: 1,
    },
    {
      id: 3,
      userId: 2,
      publication: "I'm a Spider-man and I can make lots of web :)",
      likes: 6,
    },
    {
      id: 4,
      userId: 3,
      publication: "I'm Deadpool and I dont know what my name means...",
      likes: 2,
    },
    {
      id: 5,
      userId: 3,
      publication: "I have two nice 'Beretta' and I shoot very well!",
      likes: 8,
    },
    {
      id: 6,
      userId: 3,
      publication: "I'm a master of two Katana swords!!! :D",
      likes: 9,
    },
    {
      id: 7,
      userId: 4,
      publication: "My name is Natasha Romanova :)",
      likes: 8,
    },
    {
      id: 8,
      userId: 4,
      publication: "If you want to ask me something write me to dialogs :D",
      likes: 12,
    },
  ]
}

export default data;
