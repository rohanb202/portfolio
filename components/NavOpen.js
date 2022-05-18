import React from "react";
import { XIcon } from "@heroicons/react/solid";
import LogoLoder from "./LogoLoder";
import MainText from "./MainText";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

function NavOpen({ setNav, nav }) {
  const logo = useRef(null);
  const bg = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);
  const xIcons = useRef(null);
  const [navClose, setNavClose] = useState(true);
  const [xs, setXs] = useState(false);
  function navCloseHandler() {
    setTimeout(() => {
      setNav(false);
    }, 1000);

    setNavClose(false);
    setXs(!xs);
  }
  useEffect(() => {
    let tl = gsap.timeline();
    let tl2 = gsap.timeline();

    // tl.from(logo.current, { opacity: 0, duration: 2 });
    const texts = [text1.current, text2.current, text3.current, text4.current];
    if (nav) {
      tl.to(bg.current, {
        width: "100vw",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
    if (!navClose) {
      tl.to([...texts], {
        stagger: 0.02,
        xPercent: "-100",
        ease: "power3.inOut",
        duration: 0.3,
      }).to(
        bg.current,
        {
          width: "0vw",
          duration: 0.5,
          ease: "power3.inOut",
        },
        "<"
      );
      if (xs) {
        tl2
          .to(xIcons.current, {
            rotateZ: 360,
            duration: 0.3,
            ease: "power1.out",
          })
          .to(xIcons.current, {
            rotateZ: 0,
            duration: 0.3,
            ease: "power1.out",
          });
      }
    }

    console.log(xs);
  }, [nav, navClose, xs]);

  return (
    <div>
      <div className="absolute z-10 w-full ">
        <div className="flex items-center justify-between px-10 pt-5 h-[10vh]">
          <div ref={logo}>
            <LogoLoder />
          </div>

          <XIcon
            onClick={navCloseHandler}
            className="w-10 cursor-pointer md:hidden "
          />
        </div>
        <XIcon
          ref={xIcons}
          //   onMouseEnter={() => {
          //     setXs(true);
          //   }}
          //   onMouseLeave={() => {
          //     setXs(false);
          //   }}
          onClick={navCloseHandler}
          className="absolute top-0 bottom-0 z-10 hidden w-10 my-auto cursor-pointer right-10 md:inline-block "
        />
        <div className="flex  flex-col justify-center w-full h-[90vh] px-4 space-y-10">
          <div ref={text1}>
            <MainText text="HOME" />
          </div>
          <div ref={text2}>
            <MainText text="ABOUT" />
          </div>
          <div ref={text3}>
            <MainText text="PROJECT" />
          </div>
          <div ref={text4}>
            <MainText text="CONTACT" />
          </div>
        </div>
      </div>
      <div ref={bg} className="w-0 h-screen bg-white "></div>
    </div>
  );
}

export default NavOpen;