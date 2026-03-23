import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [Password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let Password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    if (number) {
      str += "0123456789";
    }
    if (character) {
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      Password += str.charAt(char);
    }
    setPassword(Password);
  }, [length, number, character]);
  useEffect(() => {
    generatePassword();
  }, [generatePassword, length, number, character]);

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-8 py-6 mt-10 bg-gray-800 text-white">
        <div className="flex shadow rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            className="w-full px-4 py-2 focus:outline-none bg-white text-red-500 font-bold"
            value={Password}
            readOnly
            placeholder="Password"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
            onClick={() => {
              navigator.clipboard.writeText(Password);
            }}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-2">
            <label>Length: {length}</label>
            <input
              type="range"
              className="w-40 text-black  px-2 py-1 rounded cursor-pointer"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              min="4"
              max="50"
            />
          </div>
          <div className="flex items-center gap-x-2">
            <label>
              <input
                type="checkbox"
                className="mr-2"
                checked={number}
                onChange={(e) => setNumber(e.target.checked)}
              />
              Numbers
            </label>
            <label>
              <input
                type="checkbox"
                className="mr-2"
                checked={character}
                onChange={(e) => setCharacter(e.target.checked)}
              />
              Characters
            </label>
          </div>
        </div>
        <div className="mt-6">
          <button
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={generatePassword}
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
