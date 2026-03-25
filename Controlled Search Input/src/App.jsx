import { useState } from "react";
import SearchBox from "./components/Search";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchBox />
    </>
  );
}

export default App;
