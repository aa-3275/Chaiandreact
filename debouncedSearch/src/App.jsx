import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debouncing logic
  useEffect(() => {
    const handleApiCall = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000); // Adjust the delay as needed
    return () => {
      clearTimeout(handleApiCall);
    };
  }, [query]);

  return (
    <>
      <h1>Debounced Search</h1>
      <div className="main-container">
        <input
          type="text"
          placeholder="Serach.."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
        <p>{debouncedQuery}</p>
      </div>
    </>
  );
}

export default App;
