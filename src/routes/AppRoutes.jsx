import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home";
import MoviePage from "@/pages/Movie";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
    </Routes>
  );
}
