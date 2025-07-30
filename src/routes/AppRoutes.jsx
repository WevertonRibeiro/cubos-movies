import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import HomePage from "../pages/Home";

export default function AppRoutes() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
