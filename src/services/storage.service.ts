const storageService = {
  setToken: (token: string) => {
    localStorage.setItem("token", token);
  },
  getToken: () => {
    return localStorage.getItem("token") || null;
  },
  removeToken: () => {
    localStorage.removeItem("token");
  },
};

export default storageService;
