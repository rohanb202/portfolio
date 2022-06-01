import React from "react";
import LogoLoder from "./LogoLoder";

function Navbar() {
  return (
    <div className="flex items-center justify-around px-20 py-10 space-x-8 text-white BGB">
      <div className={` flex flex-col text-[20px]   BGB`}>
        <div>XO</div>
        <div className="inline-block h-1 bg-white w-[35px]"></div>
        <div>NO</div>
      </div>
      <div className="block w-full h-1 bg-white"></div>
      <div className="flex justify-around space-x-4">
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
