import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Story from "./sections/Story";
import Catalogue from "./sections/Catalogue";

export default function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Story />
      <Catalogue />
    </div>
  );
}
