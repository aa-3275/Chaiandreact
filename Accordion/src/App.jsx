import { act, useState } from "react";
import "./App.css";
const data = [
  { id: 1, title: "Item 1", content: "Content 1" },
  { id: 2, title: "Item 2", content: "Content 2" },
  { id: 3, title: "Item 3", content: "Content 3" },
];
function App() {
  const [activeId, setActiveId] = useState(null);
  console.log(activeId);
  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };
  return (
    <>
      <div className="accordion">
        {data.map((item) => (
          <div key={item.id} className="accordion-item">
            <button
              onClick={() => {
                toggle(item.id);
              }}
            >
              {item.title}
            </button>
            {activeId === item.id && (
              <div className="content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
