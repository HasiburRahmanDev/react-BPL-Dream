import React from "react";
import NavImg from "../../assets/logo.png";
import dollarImg from "../../assets/dollar-1.png";

const NavBar = ({ availableBalance }) => {
  return (
    <div className="navbar max-w-[1240px] mx-auto">
      <div className="flex-1">
        <a className="text-xl">
          <img className="w-[60px] h-[60px]" src={NavImg} alt="" />
        </a>
      </div>
      <div className="flex items-center gap-0.5">
        <span>{availableBalance}</span>
        <span>Coin</span>
        <img src={dollarImg} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
