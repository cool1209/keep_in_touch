const authUserInStorage = {
  get() {
    return JSON.parse(sessionStorage.getItem('authUser'));
  },

  set(user) {
    sessionStorage.setItem('authUser', JSON.stringify(user));
  },

  remove() {
    sessionStorage.removeItem('authUser');
    return null;
  },

  getId() {
    if (this.get()) return this.get().id;
  },

  present() {
    return !!this.get();
  },
}

export default authUserInStorage;
