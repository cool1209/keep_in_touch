import {
  users,
  publications,
  dialogs
} from './data.js'

const userId = 4;
const [ user ] = users.filter(user => user.id === userId);
const userData = {
  user,
  publicationsPage: {
    publications: publications
      .filter(publication => publication.userId === userId),

    newPublicationText: "",
  },

  dialogsPage: {
    dialogs: dialogs.filter(dialog => dialog.members
      .includes(userId)),

    newMessageText: ""
  }
}

export default userData;

// {
//   members: [1, 2],
//   messages: [
//     {
//       id: 2,
//       member: 1,
//       message: 'Hello man, how are you?',
//     }
// }

const dialogs2 = [
  {
    companion: '',
    messages: []
  }
]
