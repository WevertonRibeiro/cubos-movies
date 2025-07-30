import { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

import api from "../../services/api";
import "./styles.scss";

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();

  const loadData = async () => {
    const res = await api.get("/discover/movie");
    if (!res) return;
    console.log(res);
  };

  useEffect(() => {
    loadData();
  });

  return (
    <>
      <h1>Homepage</h1>
      <button onClick={toggleTheme}>
        Alternar para {theme === "light" ? "Claro" : "Escuro"}
      </button>
    </>
  );
}
