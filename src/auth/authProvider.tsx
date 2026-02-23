const authProvider = {
  login: ({ username, password }: any) => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("auth", "true");
      return Promise.resolve();
    }
    return Promise.reject();
  },

  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },

  checkAuth: () => {
    return localStorage.getItem("auth")
      ? Promise.resolve()
      : Promise.reject();
  },

  checkError: () => Promise.resolve(),
  getPermissions: () => Promise.resolve(),
};

export default authProvider;