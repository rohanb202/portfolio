import Head from "next/head";
//import Image from "next/image";
import NavOpen from "../components/NavOpen";
import { useTheme } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";

import { gsap } from "gsap";
//const ScrollTrigger = dynamic(() => import("gsap/ScrollTrigger"), {});
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { MenuAlt1Icon } from "@heroicons/react/solid";
//import ScrollText from "../components/ScrollText";
let ScrollText = dynamic(import("../components/ScrollText"), { ssr: false });
//let useLocoScroll = dynamic(import("../hooks/useLocoScroll"), { ssr: false });
import Project from "../components/Project";
import Navbar from "../components/Navbar";

export default function Home() {
  const [nav, setNav] = useState(false);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const preHome = useRef(null);
  const projectRef = useRef(null);
  const shaRef = useRef(null);
  //const shaRef2 = useRef(null);
  const glow = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);
  const themeTrigger = useRef(null);
  const scrollTextCol = useRef(null);
  const navBtn = useRef(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    if (!nav) {
      document.querySelector("body").style.overflowY = "auto";
    }
    let body = document.querySelector("body");
    gsap.to(body, {
      backgroundColor: "#ffffff",
      immediateRender: true,

      scrollTrigger: {
        trigger: contactRef.current,
        scrub: true,
        start: "top bottom-=1000px",
        end: "+=100%",
      },
    });
    gsap.to(scrollTextCol.current, {
      immediateRender: true,

      scrollTrigger: {
        trigger: contactRef.current,
        scrub: true,
        toggleClass: {
          targets: scrollTextCol.current,
          className: "textStroke6",
          scrub: true,
        },
        start: "top bottom-=1280px",
        end: "+=100%",
      },
    });
    gsap.to(navBtn.current, {
      immediateRender: true,

      scrollTrigger: {
        trigger: contactRef.current,
        scrub: true,
        toggleClass: {
          targets: navBtn.current,
          className: "blackText",
          scrub: true,
        },
        start: "top bottom-=1280px",
        end: "+=100%",
      },
    });
    gsap.to(projectRef.current, {
      immediateRender: true,

      scrollTrigger: {
        trigger: contactRef.current,
        scrub: true,
        toggleClass: {
          targets: projectRef.current,
          className: "blackText",
          scrub: true,
        },
        start: "top bottom-=1100px",
        end: "+=100%",
      },
    });
    // gsap.to(body, {
    //   backgroundColor: "#000000",
    //   immediateRender: false,
    //   scrollTrigger: {
    //     trigger: projectRef.current,
    //     scrub: true,
    //     start: "top bottom",
    //     end: "+=100%",
    //   },
    // });
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: homeRef.current,
    //       pin: true,
    //       scrub: 0.2,
    //       start: "top top",
    //       end: "+=10000",
    //     },
    //   })
    //   .to(shaRef.current, {
    //     rotation: 360 * 5,
    //     duration: 1,
    //     ease: "none",
    //   });
  }, [nav]);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    // console.log(themeTrigger.current);
    // ScrollTrigger.create({
    //   trigger: themeTrigger.current,
    //   start: "bottom bottom+=1000px",
    //   onEnter: changeTheme,
    //   onLeave: changeTheme,
    //   onEnterBack: changeTheme,
    //   onLeaveBack: changeTheme,
    //   markers: true,
    // });
    let tl2 = gsap.timeline();
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: preHome.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    const texts = [
      { layer: text1.current, depth: 1.4 },
      { layer: text2.current, depth: 2 },
      { layer: text3.current, depth: 1.6 },
      { layer: text4.current, depth: 1.8 },
    ];
    texts.forEach((text) => {
      const depth = text.depth;
      const movement = text.layer.offsetHeight * depth;
      tl.to(text.layer, { y: movement, ease: "none" }, 0);
    });
    gsap.to(shaRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: homeRef.current,

        scrub: 0.2,
        start: "top top",
      },
    });
    gsap.to(glow.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: projectRef.current,

        scrub: 0.2,
        start: "top top",
      },
    });
    tl2.to(shaRef.current, {
      rotation: 360 * 5,

      scale: 1,

      ease: "none",
      scrollTrigger: {
        trigger: homeRef.current,
        pin: true,
        scrub: 0.2,
        start: "top top",
        end: "+=1000",
      },
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Xono</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {nav && <NavOpen className="" setNav={setNav} nav={nav} />}
      <div className="relative" id="main">
        <div className="fixed right-0 z-10 flex h-screen p-2 ">
          <MenuAlt1Icon
            ref={navBtn}
            onClick={(e) => setNav(true)}
            className={`${
              nav && "hidden"
            }   hover:scale-110  transition duration-100 ease-in-out top-0 bottom-0 w-10 my-auto text-white/80 cursor-pointer right-10  `}
          />
        </div>

        <section ref={preHome} className="text-center">
          <Navbar />
          <div className="p-10 text-white  BGB h-[100vh]">
            <h1 className="textStroke3 text-7xl">
              Hey, I'm <span className="textStroke6">Rohan Bhandari</span>{" "}
              <br />
              But you can call me
            </h1>
            <div className="flex flex-col items-center my-20 space-y-20">
              <div className="block w-[50%] h-1 bg-white"></div>
              <div className="block w-[40%] h-1 bg-white"></div>
              <div className="block w-[30%] h-1 bg-white"></div>
              <div className="block w-[20%] h-1 bg-white"></div>
              <div className="block w-[10%] h-1 bg-white"></div>
            </div>
          </div>
          <div className="relative w-screen h-[150vh] bg">
            <div className="absolute  mx-auto inset-x-0 z-[1] w-[500px] bottom-0 ">
              <img src="/images/skel.png" className=""></img>
            </div>
            <div className="relative z-0 flex justify-center w-full px-20 space-x-20 -top-[15%]">
              <div ref={text1} className="text-white text-[20rem] BGB  ">
                X
              </div>
              <div ref={text2} className="text-white text-[20rem] BGB  ">
                O
              </div>
              <div ref={text3} className="text-white text-[20rem] BGB  ">
                N
              </div>
              <div ref={text4} className="text-white text-[20rem] BGB ">
                O
              </div>
            </div>
            <div className="absolute bottom-0 w-full text-white bg-gradient-to-t from-[#fe0944] to-transparent h-[50vh] z-[1]"></div>
          </div>
          <div className="absolute  w-full text-white bg-[#1C1C20]  h-[30vh] z-[1]"></div>
        </section>

        <div className="px-[8vw] ">
          {/* <section className="h-screen"></section> */}
          <section
            className="h-screen text-5xl text-white lg:text-9xl"
            ref={homeRef}
          >
            {/* <h1 className="absolute z-10 flex BGB" ref={textRef1}>
              Wake up
            </h1>
            <h1
              className="absolute bottom-0 z-10 flex justify-end w-full BGB"
              ref={textRef2}
            >
              to Reality
            </h1> */}

            <div className="opacity-0 glow" ref={glow}></div>
            <img
              ref={shaRef}
              className="absolute inset-0 m-auto opacity-0 sc z-[2]"
              src="/images/s2col.svg"
              alt=""
            />
          </section>

          <section className="text-white" ref={projectRef}>
            <div className="pt-2 textStroke3">
              <ScrollText text="PROJECTS" />
            </div>
            <div className="mt-10">
              <div>
                <Project
                  no="01"
                  text="LinkedIn Clone"
                  date="May 2022"
                  link="/images/p1.png"
                />
              </div>
              <Project
                no="02"
                text="LinkedIn Clone"
                date="May 2022"
                link="/images/p1.png"
                rev
              />
              <Project
                no="03"
                text="LinkedIn Clone"
                date="May 2022"
                link="/images/p1.png"
              />
              <Project
                no="04"
                text="LinkedIn Clone"
                date="May 2022"
                link="/images/p1.png"
                rev
              />
            </div>
          </section>
          <section className="h-screen" ref={contactRef}>
            <div className="pt-2 textStroke3" ref={scrollTextCol}>
              <ScrollText text="CONTACT" rev />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
