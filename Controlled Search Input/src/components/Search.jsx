import { useState } from "react";
const items = [
  { name: "Apple" },
  { name: "Banana" },
  { name: "Cherry" },
  { name: "Date" },
  { name: "Elderberry" },
  { name: "Fig" },
  { name: "Grape" },
  { name: "Honeydew" },
];
export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div>
      <input
        value={searchTerm}
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
      {filteredItems.length === 0 && <p>No items found.</p>}
    </div>
  );
}
