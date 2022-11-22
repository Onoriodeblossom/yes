import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Poverty from "./pages/Poverty";
import Education from "./pages/Education";
import Community from "./pages/Community";
import Health from "./pages/Health";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/poverty" element={<Poverty />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/health" element={<Health />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/donation" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
