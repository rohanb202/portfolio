import React from "react";
import MainTitle from "./MainTitle";
import Image from "next/image";
import { ArrowUpIcon } from "@heroicons/react/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Project({ no, text, date, link, rev }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className={`flex ${
        rev && `flex-row-reverse`
      }  w-full py-10 px-2 relative lg:space-x-10 `}
    >
      <div
        className="absolute top-2 md:top-0 "
        data-aos={`${rev ? "fade-left" : "fade-right"}`}
      >
        <MainTitle text={no} />
      </div>
      <div
        className={`flex  flex-col cursor-pointer relative ${
          rev && "left-16"
        } `}
        data-aos={`${rev ? "fade-left" : "fade-right"}`}
      >
        <div className=" relative   w-10/12 min-w-[300px] min-h-[200px]     bg-white rounded-lg">
          <img src={link} className="rounded-lg w-full h-full object-cover " />
        </div>
        <div
          className={`${
            rev && `flex-row-reverse`
          } flex w-10/12 min-w-[300px] pt-5 pb-1  justify-end items-center space-x-2`}
        >
          <h1 className="text-white BGB text-left">{text}</h1>
          <ArrowUpIcon className="w-5 text-white rotate-45" />
        </div>
        <div
          className={`text-white  flex items-center space-x-2 pl-10 font-semibold ${
            rev && `flex-row-reverse` && ` justify-end pr-2`
          }`}
        >
          <span className="w-8 h-[1px] bg-white"></span>
          <p>{date}</p>
        </div>
      </div>
      <div
        className={`text-white hidden lg:inline-flex relative ${
          !rev && "-left-20"
        } `}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eos
        aspernatur sequi, quas magni enim. Dignissimos explicabo voluptas,
        voluptate praesentium nihil itaque doloremque sequi ipsum provident,
        fugit nisi beatae eum.
      </div>
    </div>
  );
}

export default Project;
