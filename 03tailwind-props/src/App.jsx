import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-blue-500 text-white p-4 rounded-lg mb-4">
        {" "}
        Tailwind CSS
      </h1>
      <Card title="New India Design Trends" />
      <Card title="Old India Design Trends" />
    </>
  );
}

export default App;
