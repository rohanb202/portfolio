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
  const xIcons2 = useRef(null);
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
    let tl3 = gsap.timeline();
    let tl4 = gsap.timeline();

    // tl.from(logo.current, { opacity: 0, duration: 2 });
    const texts = [text1.current, text3.current, text4.current];
    if (nav) {
      document.querySelector("body").style.overflow = "hidden";
      tl.to(bg.current, {
        width: "100vw",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }

    if (navClose) {
      tl3.to(logo.current, { duration: 0.2, opacity: 1 });
    }

    if (!navClose) {
      tl3.to(logo.current, { duration: 0.2, yPercent: "-150" });
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
            rotateZ: 90,
            duration: 0.3,
            ease: "power1.out",
          })
          .to(xIcons.current, {
            rotateZ: -90,
            duration: 0.3,
            ease: "power1.out",
          });
        tl4
          .to(xIcons2.current, {
            rotateZ: 90,
            duration: 0.3,
            ease: "power1.out",
          })
          .to(xIcons2.current, {
            rotateZ: -90,
            duration: 0.3,
            ease: "power1.out",
          });
      }
    }

    console.log(xs);
  }, [nav, navClose, xs]);

  return (
    <div>
      <div className="fixed z-20 w-full py-5 ">
        <div className="flex w-[100vw] items-center justify-between px-10 pt-5 h-[10vh]">
          <div ref={logo} className="opacity-0">
            <LogoLoder />
          </div>

          <XIcon
            ref={xIcons2}
            onClick={navCloseHandler}
            className={`w-10  cursor-pointer md:hidden text-[#242423]  `}
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
          className="absolute top-0 bottom-0 z-10 hidden w-10 my-auto cursor-pointer right-10 md:inline-block text-[#242423] "
        />
        <div className="flex  flex-col justify-center w-full h-[90vh] px-4 space-y-10">
          <a onClick={navCloseHandler} href="#main" ref={text1}>
            <MainText text="HOME" />
          </a>
          <a onClick={navCloseHandler} href="#project" ref={text3}>
            <MainText text="PROJECT" />
          </a>
          <a onClick={navCloseHandler} href="#contact" ref={text4}>
            <MainText text="CONTACT" />
          </a>
        </div>
      </div>
      <div ref={bg} className="w-0 h-screen bg-[#e8eddf] fixed z-10 "></div>
    </div>
  );
}

export default NavOpen;
