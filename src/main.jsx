import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Nav-bar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Home />
    <Services />
    <About />
    <Contact />
  </StrictMode>
);