import { useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);

  const toggleModal = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleModal}>Open Modal</button>

      {toggle && (
        <div className="overlay" onClick={toggleModal}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()} // 🔥 KEY FIX
          >
            <button onClick={toggleModal}>Close</button>

            <div className="modal">Modal Content</div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
