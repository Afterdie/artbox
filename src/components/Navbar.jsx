import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "/assets/logo_placeholder.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-40 flex w-full items-center justify-center bg-black p-4 text-white">
      <div className="logo">
        <img src="/assets/logo_placeholder.png" alt="" />
      </div>
    </nav>
  );
}
