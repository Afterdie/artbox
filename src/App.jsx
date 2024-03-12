import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Story from "./sections/Story";
import Catalogue from "./sections/Catalogue";
import Socials from "./sections/Socials";
import Review from "./sections/Review";

export default function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Story />
      <Catalogue />
      <Socials />
      <Review />
    </div>
  );
}
