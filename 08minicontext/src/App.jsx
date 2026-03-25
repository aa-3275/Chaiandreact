import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./componets/login";
import Profile from "./componets/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>Hello ContextApi</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
