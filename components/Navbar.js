import React from "react";
import LogoLoder from "./LogoLoder";
import { MenuAlt1Icon } from "@heroicons/react/solid";

function Navbar({ setNav, nav }) {
  return (
    <div className="flex items-center justify-around px-10 py-10 space-x-8 text-white md:px-20 BGB">
      <div className={` flex flex-col text-[20px]   BGB`}>
        <div>XO</div>
        <div className="inline-block h-1 bg-white w-[35px]"></div>
        <div>NO</div>
      </div>
      <div className="block w-full h-1 bg-white"></div>

      <div className="z-10">
        {!nav && (
          <MenuAlt1Icon
            onClick={() => setNav(true)}
            className="w-10 transition duration-100 ease-in-out cursor-pointer md:hidden hover:scale-110 text-white/80"
          />
        )}
      </div>
      <div className="justify-around hidden space-x-4 md:flex">
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
