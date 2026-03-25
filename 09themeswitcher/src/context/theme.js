import { createContext, useContext } from "react";

// Yahan variables nahi, default values aayengi
export const ThemeContext = createContext({
  themeMode: "light", // Default string
  darkTheme: () => {}, // Empty function
  lightTheme: () => {}, // Empty function
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
