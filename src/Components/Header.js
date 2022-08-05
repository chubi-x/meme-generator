import React from "react";
import logo from "../images/logo.png";
export default function Header(props) {
  const leftGradient = props.gradient[0];
  const middleGradient = props.gradient[1];
  const rightGradient = props.gradient[2];

  let navGradient = `bg-gradient-[40deg] ${leftGradient} ${middleGradient} ${rightGradient}`;
  return (
    <nav className={navGradient}>
      <div className="w-100 mr-0 mt-0 container flex font-karla items-center h-30">
        <div className="flex space-x-5 p-2 pb-5 items-center md:pl-20 ">
          <img src={logo} alt="logo" className="w-20" />
          <span className="text-white text-4xl font-bold pt-5">
            Meme-o-matic{" "}
          </span>
        </div>
      </div>
    </nav>
  );
}
