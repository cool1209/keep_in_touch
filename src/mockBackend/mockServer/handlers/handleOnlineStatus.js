let userStatusesOnline = [2, 5, 8, 12, 17, 20, 24, 33, 36, 40, 41, 43, 45, 48];

const addOnlineStatus = (userId) => {
  userStatusesOnline.push(userId);
  const timeoutId = setTimeout(() => {
    removeOnlineStatus(userId);
  },30000);

  return timeoutId;
}

const removeOnlineStatus = (userId) => {
  userStatusesOnline = userStatusesOnline.filter(id => id !== userId);
}

const resetOnlineStatus = (userId, timeoutId) => {
  clearTimeout(timeoutId);
  removeOnlineStatus(userId);
}

export const checkOnlineStatus = (userId) => {
  return userStatusesOnline.includes(userId);
}

export const updateOnlineStatus = (userId) => {
  const isStatusOnline = checkOnlineStatus(userId);
  let timeoutId;

  if (isStatusOnline) {
    resetOnlineStatus(userId, timeoutId);
    timeoutId = addOnlineStatus(userId);

  } else {
    timeoutId = addOnlineStatus(userId);
  }
};

export const getOnlineStatus = (profileId) => {
  return {statusCode: 200, data: checkOnlineStatus(+profileId)};
}
