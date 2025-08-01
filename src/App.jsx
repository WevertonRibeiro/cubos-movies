import React from "react";

import { ThemeProvider } from "@/context/ThemeContext";
import AppRoutes from "@/routes/AppRoutes";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./styles/theme.scss";
import "./styles/global.scss";
import "./App.scss";

function App() {
  return (
    <ThemeProvider>
      <div className="main">
        <Header />
        <div className="content">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
