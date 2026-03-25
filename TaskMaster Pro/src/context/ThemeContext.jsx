import React, { createContext, useState, useContext } from "react";

// 1. Create the Context object
const ThemeContext = createContext();

// 2. Create a Custom Provider Component
export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // The value prop is what we are broadcasting
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook for easy access (Professional practice)
export const useTheme = () => useContext(ThemeContext);
