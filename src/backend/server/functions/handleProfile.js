import users from "../../data/users";
import profileStatuses from "../../data/profileStatuses";

export const getProfile = (userId) => ({
  data: users.find((user) => user.id === userId),
  status: 200,
});

const findProfileStatus = (userId) => (
  profileStatuses.find(profileStatus => (
    profileStatus.userId === userId
  ))
);

export const getProfileStatus = (userId) => {
  const profileStatus = findProfileStatus(userId);

  if (profileStatus) {
    return {
      status: 200,
      profileStatus: profileStatus.status
    }
  } else {
    profileStatuses.push({
      id: profileStatuses.length + 1,
      userId,
      status: ''
    });

    return {
      status: 200,
      profileStatus: ''
    }
  };
};

export const putProfileStatus = (userId, status) => {
  const profileStatus = findProfileStatus(userId);

  if (profileStatus) {
    profileStatus.status = status;

    return {status: 200}
  } 

};
