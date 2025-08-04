import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleChangeTheme = (value) => {
    setTheme(value);
    document.documentElement.setAttribute("data-theme", value);
    localStorage.setItem("theme", value);
  };

  const toggleTheme = () => {
    handleChangeTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
