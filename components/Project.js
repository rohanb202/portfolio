import React from "react";
import MainTitle from "./MainTitle";
import Image from "next/image";
import { ArrowUpIcon } from "@heroicons/react/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
//const ScrollTrigger = dynamic(() => import("gsap/ScrollTrigger"), {});
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Project({ no, text, date, link, rev }) {
  const [hover, setHover] = useState(false);
  let circ = useRef(null);
  let num = useRef(null);
  let img = useRef(null);
  let para = useRef(null);
  let main = useRef(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    //console.log(hover);
    let tl = gsap.timeline();

    if (hover) {
      tl.to(circ.current, {
        scale: 3,
      });
    } else {
      tl.to(circ.current, {
        scale: 1.5,
      });
    }
  }, [hover]);
  return (
    <div
      ref={main}
      className={`flex ${
        rev && `flex-row-reverse`
      }  w-full py-10 px-2 relative lg:space-x-10 `}
    >
      <div ref={num} className="absolute top-2 md:top-0 ">
        <MainTitle text={no} hover={hover} setHover={setHover} />
      </div>
      <div
        ref={img}
        onMouseLeave={() =>
          setTimeout(() => setTimeout(() => setHover(false), 500))
        }
        onMouseEnter={() => setHover(true)}
        className={`flex py-5 flex-col cursor-pointer relative ${
          rev && "pl-10"
        } `}
        data-aos={`${rev ? "fade-left" : "fade-right"}`}
      >
        <div className=" w-10/12 min-w-[300px] min-h-[200px]     bg-white rounded-lg">
          <img
            src={link}
            className="rounded-lg w-full h-full object-cover -z-[2] "
          />
        </div>
        <div
          className={`${
            rev && `flex-row-reverse`
          } flex w-10/12 min-w-[300px] pt-5 pb-1  justify-end items-center space-x-2`}
        >
          <h1 className="relative z-10 text-left BGB">{text}</h1>
          <div className="relative px-2">
            <ArrowUpIcon className="z-10 w-5 rotate-45" />
            <div
              ref={circ}
              className="w-5 h-5 bg-[#fe0944] absolute rounded-full top-0 -z-[1] "
            ></div>
          </div>
        </div>
        <div
          className={`  flex items-center space-x-2 pl-10 font-semibold ${
            rev && `flex-row-reverse` && ` justify-end pr-10`
          }`}
        >
          <span className="w-8 h-[1px] bg-white"></span>
          <p>{date}</p>
        </div>
      </div>
      <div
        ref={para}
        className={` hidden lg:inline-flex relative ${!rev && "-left-20"} `}
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
