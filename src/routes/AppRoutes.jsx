import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home";
import MoviePage from "@/pages/Movie";
import FidelidadePage from "@/pages/Fidelidade";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/fidelidade" element={<FidelidadePage />} />
    </Routes>
  );
}
