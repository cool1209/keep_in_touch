import data from './data.js'

const { users, publications, dialogs } = data;
let isUserId = 1;

export const getCurrentUserId = (id) => isUserId = id;

const getUser = (id) => (
  users.find(user => user.id === id)
);

const getCurrentUser = () => getUser(isUserId);

const getCurrentUserPublication = () => (
  publications.filter(publication => publication.userId === isUserId)
);

const getCurrentUserDialog = () => {
  const currentUserId = isUserId;

  const userDialog = dialogs
    .filter(dialog => dialog.members.includes(currentUserId));

  const changedUserdialogs = userDialog.map(dialog => ({
    id: dialog.id,

    companion: getUser(
      dialog.members.find(member => member !== currentUserId)
    ).name,

    messages: dialog.messages.map(message => ({
      id: message.id,
      member: getUser(message.member).name,
      memberAvatar: getUser(message.member).avatar,
      message: message.message
    }))
  }))

  return changedUserdialogs;
};

const getUserData = () => {
  return {
    user: getCurrentUser(),
    publicationsPage: {
      publications: getCurrentUserPublication(),
      newPublicationText: "",
    },
    dialogsPage: {
      dialogs: getCurrentUserDialog(),
      newMessageText: ""
    }
  }
}

export const getInitialState = () => ({
  currentUser: getUserData(),
  users: users,
  publications: publications,
  dialogs: dialogs
});
