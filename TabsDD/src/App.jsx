import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
const tabs = [
  {
    id: 1,
    title: "Tab 1",
    content: [
      "Content for Tab 1",
      "Additional content for Tab 1",
      "More content for Tab 1",
    ],
  },
  {
    id: 2,
    title: "Tab 2",
    content: [
      "Content for Tab 2",
      "Additional content for Tab 2",
      "More content for Tab 2",
    ],
  },
  {
    id: 3,
    title: "Tab 3",
    content: [
      "Content for Tab 3",
      "Additional content for Tab 3",
      "More content for Tab 3",
    ],
  },
];

function App() {
  const [activtab, setActiveTab] = useState(null);

  return (
    <>
      <div className="container ">
        {tabs.map((tab) => (
          <div key={tab.id} className="tab-item">
            <button
              onClick={() => {
                setActiveTab((prev) => (prev === tab.id ? null : tab.id));
              }}
            >
              {tab.title}
            </button>
            {activtab === tab.id && (
              <div className="dropdowns">
                {tab.content.map((item) => (
                  <p className="dropdown-item" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
