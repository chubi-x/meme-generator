import React from "react";
import logo from "../images/logo.png";
export default function Header(props) {
  const leftColor = props.gradient[0];
  const middleColor = props.gradient[1];
  const rightColor = props.gradient[2];

  let navGradient = `bg-gradient-[40deg] ${leftColor} ${middleColor} ${rightColor}`;
  return (
    <nav className={navGradient}>
      <div className="w-100 mr-0 mt-0 container flex font-karla items-center h-30">
        <div className="flex space-x-5 p-2 pb-5 items-center md:pl-20 ">
          <img src={logo} alt="logo" className="w-12" />
          <span className="text-white text-3xl font-bold pt-2">
            Meme-o-matic{" "}
          </span>
        </div>
      </div>
    </nav>
  );
}
