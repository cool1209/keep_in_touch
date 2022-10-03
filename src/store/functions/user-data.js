const getCurrentUserData = (state) => {
  const { user, users, dialogs, } = state;

  const getUser = (id) => (
    users.find(user => user.id === id)
  );

  const getCurrentUserDialogs = () => {
    const userDialogs = dialogs.filter(dialog => dialog.members.includes(user.id));

      return userDialogs.map(dialog => ({
      id: dialog.id,

      messages: dialog.messages.map(message => ({
        id: message.id,
        member: getUser(message.member).name,
        memberAvatar: getUser(message.member).avatar,
        message: message.message
      }))
    }))
  };
}

export default getCurrentUserData;
