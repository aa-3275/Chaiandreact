import React, { useContext } from "react";
import UserContext from "../context/UserCntext";

function Profile() {
  const { user } = useContext(UserContext);
  console.log("User in Profile:", user);
  if (!user) {
    return <h2>Please log in to view your profile.</h2>;
  }
  return <div>Welcome {user.userName} to your profile page!</div>;
}
export default Profile;
