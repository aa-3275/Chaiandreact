import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let counter = 0;
  let [count, setCount] = useState(0);
  const addvalue = () => {
    // counter += 1;
    if (count < 20) {
      setCount(count + 1);
      setCount((prevCounter) => prevCounter + 1);
      setCount((prevCounter) => prevCounter + 1);
      setCount((prevCounter) => prevCounter + 1);
      setCount((prevCounter) => prevCounter + 1);

      console.log("Counter value:", count);
    } else {
      alert("Counter value cannot exceed 20");
    }
  };
  const subtractvalue = () => {
    // counter -= 1;
    if (count <= 0) {
      alert("Counter value cannot be less than 0");
      return;
    }
    setCount(count - 1);
    console.log("Counter value:", count);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value:{count}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={subtractvalue}> Remove value</button>
    </>
  );
}

export default App;
