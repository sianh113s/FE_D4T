const deniedAccess = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("Username");
};

export default deniedAccess;
