import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("olive");

  const colors = [
    "red",
    "green",
    "blue",
    "olive",
    "teal",
    "purple",
    "pink",
    "yellow",
    "orange",
    "black",
    "gray",
  ];

  return (
    <div
      className="w-full h-screen duration-500 flex flex-col"
      style={{ backgroundColor: bgColor }}
    >
      {/* Heading */}
      <h1 className="text-3xl text-white p-4 text-center">
        Background Color Changer: {bgColor}
      </h1>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Bottom Color Palette Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-3 rounded-full shadow-xl flex gap-3">
        {colors.map((color) => (
          <button
            key={color}
            className="w-8 h-8 rounded-full border-2 border-white hover:scale-110 transition-transform"
            style={{ backgroundColor: color }}
            onClick={() => setBgColor(color)}
            title={color}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
