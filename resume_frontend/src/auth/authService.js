const authService = {
  login: async ({ email }) => {
    const user = { name: "User", email, verified: true };
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  },

  signup: async ({ name, email }) => {
    const user = { name, email, verified: false };
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  },

  logout: async () => {
    localStorage.removeItem("user");
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },
};

export default authService;
