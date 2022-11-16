import { updateOnlineStatus } from "./handleOnlineStatus";
import { getUser } from "./handleUsers";

export const getProfile = (body, userId) => {
  const { profileId } = body;
  const user = getUser(profileId);

  if (user) {
    updateOnlineStatus(userId);

    const { id, name, avatar, status, city, about, wallpaper } = user;
    const profile = {
      id,
      name,
      avatar,
      status,
      city,
      about,
      wallpaper
    }
      
    return {data: profile, status: 200};
  }
};

export const putProfileStatus = (body, userId) => {
  const { status } = body;
  const user = getUser(userId);

  if (user) {
    updateOnlineStatus(userId);

    user.status = status;
  
    return {status: 200};
  }
};
