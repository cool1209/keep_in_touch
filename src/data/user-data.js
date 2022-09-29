import data from './data.js'

const { users, publications, dialogs } = data;

const getCurrentUserId = () => 1;

const getUser = (id) => (
  users.find(user => user.id === id)
);

const getCurrentUser = () => getUser(getCurrentUserId());

const getCurrentUserPublication = () => (
  publications.filter(publication => publication.userId === getCurrentUser())
);

const getCurrentUserDialogs = () => {
  const currentUserId = getCurrentUserId();

  const userDialogs = dialogs
    .filter(dialog => dialog.members.includes(currentUserId));

  const changedUserdialogs = userDialogs.map(dialog => ({
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

export const getUserData = () => {
  return {
    user: getCurrentUser(),
    publicationsPage: {
      publications: getCurrentUserPublication(),
      newPublicationText: "",
    },
    dialogsPage: {
      dialogs: getCurrentUserDialogs(),
      newMessageText: ""
    }
  }
}
