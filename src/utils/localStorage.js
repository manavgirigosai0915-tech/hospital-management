// ===============================
// Storage Keys
// ===============================

const USERS_KEY = "hospitalUsers";
const LOGIN_KEY = "loggedInUser";
const STATUS_KEY = "isLoggedIn";


// ===============================
// Get All Users
// ===============================

export const getUsers = () => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};


// ===============================
// Register User
// ===============================

export const registerUser = (user) => {
  const users = getUsers();

  const exist = users.find(
    (u) => u.email === user.email
  );

  if (exist) {
    return {
      success: false,
      message: "Email already registered",
    };
  }

  user.role = "user";

  users.push(user);

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  );

  return {
    success: true,
    message: "Registration Successful",
  };
};


// ===============================
// Login User
// ===============================

export const loginUser = (email, password) => {

  // ==========================
  // Admin Login
  // ==========================

  if (
    email === "manav@hospital.com" &&
    password === "manavgosai"
  ) {

    const admin = {
      id: 1,
      name: "Administrator",
      email: "admin@hospital.com",
      role: "admin",
    };

    localStorage.setItem(
      LOGIN_KEY,
      JSON.stringify(admin)
    );

    localStorage.setItem(
      STATUS_KEY,
      "true"
    );

    return {
      success: true,
      role: "admin",
      user: admin,
    };
  }

  // ==========================
  // User Login
  // ==========================

  const users = getUsers();

  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password
  );

  if (user) {

    localStorage.setItem(
      LOGIN_KEY,
      JSON.stringify(user)
    );

    localStorage.setItem(
      STATUS_KEY,
      "true"
    );

    return {
      success: true,
      role: "user",
      user,
    };
  }

  return {
    success: false,
    message: "Invalid Email or Password",
  };
};


// ===============================
// Get Logged In User
// ===============================

export const getLoggedInUser = () => {

  return JSON.parse(
    localStorage.getItem(LOGIN_KEY)
  );

};


// ===============================
// Check Login
// ===============================

export const isLoggedIn = () => {

  return localStorage.getItem(STATUS_KEY) === "true";

};


// ===============================
// Check Admin
// ===============================

export const isAdmin = () => {

  const user = getLoggedInUser();

  return user && user.role === "admin";

};


// ===============================
// Logout
// ===============================

export const logoutUser = () => {

  localStorage.removeItem(LOGIN_KEY);

  localStorage.removeItem(STATUS_KEY);

};