import React from "react";
import UserContext from "./UserCntext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  console.log("UserContextProvider Rendered:", user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
