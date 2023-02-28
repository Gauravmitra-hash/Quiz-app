import React, { createContext, useEffect } from "react";

export const UserContext = createContext();

const isLoggedIn = "false";

const UserProvider = ({ children }) => {
  const toggleUser = () => {
    const oldUser = getUser();
    const newUser = oldUser === isLoggedIn ? true : isLoggedIn;

    updateUser(newUser, oldUser);
  };

  useEffect(() => {
    const User = getUser();
    if (!User) updateUser(isLoggedIn);
    else updateUser(User);
  }, []);

  return (
    <UserContext.Provider value={{ toggleUser }}>
      {children}
    </UserContext.Provider>
  );
};

const getUser = () => localStorage.getItem("isLoggedIn");

const updateUser = (user, userToRemove) => {
  if (userToRemove) document.documentElement.classList.remove(userToRemove);

  document.documentElement.classList.add(user);
  localStorage.setItem("isLoggedIn", user);
};

export default UserProvider;
