import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Vid from "./Components/Vid";
import Logo from "./Components/Logo";
import Cards from "./Components/Cards.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="w-full h-screen  ">
      <Navbar />
      <Hero />
      <Vid />
      <Logo />
      <Cards />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
