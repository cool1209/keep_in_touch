import { getUser } from "./general";

export const getCurrentUser = (id, users) => ({
    data: getUser(id, users),
    status: 200
});
