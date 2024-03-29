import React, { createContext } from "react";
import useToggle from "../hooks/useToggleState.js";

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const [isDarkMode, toggleTheme] = useToggle(true);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
