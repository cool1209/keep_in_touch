import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Messages.module.css';

const DialogItem = ({ name, id, avatar }) => {
  const path = `/messages/${id}`;

  return (
    <li className={styles.dialog}>
      <NavLink to={path}>
        <img src={avatar} alt='User avatar' className={styles.dialogAva}/>
        {name}
      </NavLink>
    </li>
  );
}

const MessagesItem = ({ avatar, name, message, id }) => {
  return (
    <li className={styles.message}>
      <div className={styles.user}>
        <img src={avatar} alt='User avatar' className={styles.userAva}/>

        <p className={styles.userName}>
          {name}
        </p>
      </div>

      <div className={styles.userMessage}>
        {message}
      </div>
    </li>
  );
}

const Messages = () => {

  const dialogsData = [
    {
      id: 1,
      name: 'Ironman',
      avatar: 'https://bit.ly/3Qh9rbl',
    },
    {
      id: 2,
      name: 'Spiderman',
      avatar: 'https://bit.ly/3Rm5F1M'
    },
    {
      id: 3,
      name: 'Hulk',
      avatar: 'https://bit.ly/3BdHZHq'
    },
    {
      id: 4,
      name: 'Natasha',
      avatar: 'https://bit.ly/3Ri2Z5x'
    },
    {
      id: 5,
      name: 'Tor',
      avatar: 'https://bit.ly/3RVuVMv'
    }
  ];

  const messagesData = [
    {
      userId: 1,
      messages: [
        {
          id: 1,
          messageUser: 'Spiderman',
          messageAva: 'https://bit.ly/3Rm5F1M',
          message: 'Hello man, how are you?',
        },
        {
          id: 2,
          messageUser: 'Ironman',
          messageAva: 'https://bit.ly/3Qh9rbl',
          message: 'I am five, what about you?',
        },
        {
          id: 3,
          messageUser: 'Spiderman',
          messageAva: 'https://bit.ly/3Rm5F1M',
          message: 'Not bad too',
        },
      ]
    },
    {
      userId: 2,
      messages: []
    },
  ];

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Messages:</h2>
      <div className={styles.container}>
        <ul className={styles.dialogList}>
          <DialogItem
            name={'Spiderman'}
            id={2}
            avatar={'https://bit.ly/3Rm5F1M'}
          />

          <DialogItem
            name={'Hulk'}
            id={3}
            avatar={'https://bit.ly/3BdHZHq'}
          />

          <DialogItem
            name={'Natasha'}
            id={4}
            avatar={'https://bit.ly/3Ri2Z5x'}
          />

          <DialogItem
            name={'Tor'}
            id={5}
            avatar={'https://bit.ly/3RVuVMv'}
          />
        </ul>

        <ul className={styles.messageList}>
          <MessagesItem
            avatar={'https://bit.ly/3Rm5F1M'}
            name={'Spiderman'}
            message={'Hello man, how are you?'}
            id={1} 
          />

          <MessagesItem
            avatar={'https://bit.ly/3Qh9rbl'}
            name={'ironman'}
            message={'I am five, what about you?'}
            id={2} 
          />

          <MessagesItem
            avatar={'https://bit.ly/3Rm5F1M'}
            name={'Spiderman'}
            message={'Not bad too'}
            id={3} 
          />
        </ul>
      </div>
    </section>
  );
};

export default Messages;
