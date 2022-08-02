import React from "react";
import logo from "../images/logo.png";
export default function Header() {
  return (
    <nav className="bg-gradient-[40deg] from-purple1 via-blue to-purple2">
      <div className="w-100 mr-0 mt-0 container flex font-karla items-center">
        <div className="flex space-x-5 p-5 pl-20 items-center">
          <img src={logo} alt="logo" className="w-20" />
          <span className="text-white text-4xl font-bold">Meme Generator </span>
        </div>
      </div>
    </nav>
  );
}
