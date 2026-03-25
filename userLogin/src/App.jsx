import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { use } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const validateCredentials = () => {
    if (userName === "admin" && password === "password123") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
      setIsLoggedIn(false);
    }
  };
  return (
    <>
      <h1>User Login</h1>
      <div className="login-container">
        <div className="login-form">
          <input
            type="text"
            placeholder="Enter UserName"
            title="UserName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            title="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              validateCredentials();
            }}
          >
            Login
          </button>
          {isLoggedIn && <p>Welcome, {userName}!</p>}
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </>
  );
}

export default App;
