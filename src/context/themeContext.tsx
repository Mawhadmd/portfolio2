import React from "react";
import { useContext } from "react";

export const themeContext = React.createContext<{
  theme: "light" | "dark";
  toggleTheme: () => void;
}>({ theme: "light", toggleTheme: () => {} });

export const useTheme = () => useContext(themeContext);