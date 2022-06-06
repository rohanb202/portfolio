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
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
import { MenuAlt1Icon } from "@heroicons/react/solid";
//import ScrollText from "../components/ScrollText";
let ScrollText = dynamic(import("../components/ScrollText"), { ssr: false });
//let useLocoScroll = dynamic(import("../hooks/useLocoScroll"), { ssr: false });
import Project from "../components/Project";
import Navbar from "../components/Navbar";
import MultiscrollText from "../components/MultiscrollText";

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
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);
  const line5 = useRef(null);
  const itachi = useRef(null);
  const circ1 = useRef(null);
  const circ2 = useRef(null);
  const circ3 = useRef(null);
  const circ4 = useRef(null);
  const circ5 = useRef(null);
  const animeRef = useRef(null);
  const at1 = useRef(null);
  const at2 = useRef(null);
  const at3 = useRef(null);
  const xono = useRef(null);
  const circles = useRef(null);
  let main = useRef(null);
  let pro1 = useRef(null);

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
        start: "top bottom-=125%",
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
        start: "+=50%",
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
        start: "top bottom-=130%",
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
        start: "top bottom-=130%",
        end: "+=100%",
      },
    });
    let lines = [
      line1.current,
      line2.current,
      line3.current,
      line4.current,
      line5.current,
    ];
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    tl.to([...lines], {
      opacity: 0,
      stagger: 0.3,
      duration: 1,
    }).to(
      [...lines],
      {
        opacity: 0.7,
        stagger: 0.3,
        duration: 1,
      },
      1
    );

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
        trigger: xono.current,
        start: "-=100%",
        end: "bottom top",
        scrub: true,
      },
    });
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: itachi.current,
        start: "+=100%",
        end: "+=50%",
        scrub: true,
        markers: true,
      },
    });
    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: itachi.current,
        start: "+=100%",
        end: "+=50%",
        scrub: true,
      },
    });
    let tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top top",
        end: "+=50%",
        scrub: true,
      },
    });
    const ats = [at1.current, at2.current, at3.current];

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
    tl3.to(circles.current, { opacity: 1 });
    const circs = [
      circ1.current,
      circ2.current,
      circ3.current,
      circ4.current,
      circ5.current,
    ];
    circs.forEach((circ, i) => {
      tl3.to(circ, {
        y: `${i * (circ.offsetHeight / 2) * 0.5}`,
        ease: "none",
      });
    });
    ats.forEach((at, i) => {
      tl5.to(at, {
        y: `${i * at.offsetHeight * 0.1}`,
        ease: "none",
      });
    });
    tl4.to(itachi.current, {
      y: `${(animeRef.current.scrollWidth - itachi.current.offsetWidth) / 1}`,
    });

    gsap.to(glow.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: animeRef.current,

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
        end: "+=125%",
      },
    });
  }, []);

  return (
    <div className="" ref={main}>
      <Head>
        <title>Xono</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {nav && <NavOpen className="" setNav={setNav} nav={nav} />}
      <div className="relative overflow-hidden" id="main">
        <div className="fixed right-0 z-10 hidden h-screen p-2 md:flex ">
          <MenuAlt1Icon
            ref={navBtn}
            onClick={(e) => setNav(true)}
            className={`${
              nav && "hidden"
            }  hover:scale-110  transition duration-100 ease-in-out top-0 bottom-0 w-10 my-auto text-white/80 cursor-pointer right-10  `}
          />
        </div>

        <section
          ref={preHome}
          className="inset-x-0 mx-auto text-center max-w-screen-2xl "
        >
          <Navbar setNav={setNav} nav={nav} />
          <div className="relative p-10 text-white BGB">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="textStroke3">Hey, I'm </span>
              <span className=" whitespace-nowrap">Rohan Bhandari</span> <br />
              <span className="textStroke3">But you can call me</span>
            </h1>
            <div className="flex opacity-[0.7] flex-col items-center my-20 space-y-10 lg:space-y-20">
              <div ref={line1} className="block w-[50%] h-1 bg-white"></div>
              <div ref={line2} className="block w-[40%] h-1 bg-white"></div>
              <div ref={line3} className="block w-[30%] h-1 bg-white"></div>
              <div ref={line4} className="block w-[20%] h-1 bg-white"></div>
              <div ref={line5} className="block w-[10%] h-1 bg-white"></div>
            </div>
          </div>
        </section>
        <section ref={xono} className="overflow-hidden ">
          <div className="relative w-screen h-[50vh] sm:h-[75vh]  md:h-screen  xl:h-[150vh] bg">
            <div className="absolute  mx-auto inset-x-0 z-[1] w-[200px] md:w-[300px] lg:w-[500px] bottom-0 ">
              <img src="/images/skel.png" className=""></img>
            </div>
            <div className="relative z-0 flex lg:text-[15rem] text-[4rem]   justify-center w-full px-20 xl:text-[20rem] space-x-10 lg:space-x-20 sm:text-[10rem] lg:-top-[5%] xl:-top-[15%]">
              <div ref={text1} className="text-white BGB ">
                X
              </div>
              <div ref={text2} className="text-white BGB ">
                O
              </div>
              <div ref={text3} className="text-white BGB ">
                N
              </div>
              <div ref={text4} className="text-white BGB ">
                O
              </div>
            </div>
            <div className="absolute bottom-0 w-full text-white bg-gradient-to-t from-[#fe0944] to-transparent h-[25vh] lg:h-[50vh] z-[1]"></div>
          </div>
          <div className="absolute  w-full text-white bg-[#1C1C20]  h-[30vh] z-[1]"></div>
        </section>

        <div className="relative">
          <section
            className="relative h-[100vh] text-5xl text-white lg:text-9xl"
            ref={homeRef}
          >
            <div
              className="opacity-0 glow w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] "
              ref={glow}
            ></div>
            <div className="inset-0 flex justify-center m-auto ">
              <img
                ref={shaRef}
                className="absolute  sc inset-0 m-auto opacity-0  z-[2] w-[50%] max-w-[300px] "
                src="/images/s2col.svg"
                alt=""
              />
            </div>
            <div
              ref={circles}
              className="relative z-[-1] opacity-0 inset-x-0 top-[38%] sm:top-[30%]  m-auto  "
            >
              <div
                ref={circ1}
                className="absolute inset-x-0 w-[50%] mx-auto opacity-80  max-w-[300px] max-h-[300px] "
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fe0944"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
              </div>
              <div
                ref={circ2}
                className="absolute inset-x-0 w-[50%] mx-auto opacity-60  max-w-[300px] max-h-[300px]"
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fe0944"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
              </div>
              <div
                ref={circ3}
                className="absolute inset-x-0 w-[50%] mx-auto opacity-40  max-w-[300px] max-h-[300px]"
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fe0944"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
              </div>
              <div
                ref={circ4}
                className="absolute inset-x-0 w-[50%] mx-auto opacity-20  max-w-[300px] max-h-[300px]"
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fe0944"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
              </div>
              <div
                ref={circ5}
                className="absolute inset-x-0 w-[50%] mx-auto opacity-10 max-w-[300px] max-h-[300px] "
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fe0944"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
              </div>
            </div>
          </section>
          <div className="relative"></div>
          <section className="relative" ref={animeRef}>
            <div className="absolute lg:top-[60%] flex flex-col items-center justify-center w-full text-center text-white BGB text-4xl lg:text-7xl z-[3]  ">
              <div ref={at3} className="absolute textStroke3">
                and watch <br /> a lot of anime
              </div>
              <div ref={at2} className="absolute textStroke3 ">
                and watch <br /> a lot of anime
              </div>
              <div ref={at1} className="absolute ">
                and watch <br /> a lot of anime
              </div>
            </div>

            <div className="relative mx-auto inset-x-0 -top-[10rem] lg:-top-[20rem]  flex justify-center py-10 ">
              <img
                ref={itachi}
                src="/images/sbg3.png"
                className=" relative inset-x-0 mx-auto  object-cover min-w-[800px] scale-[1.2] z-[1] "
                alt=""
              />
            </div>
          </section>

          <section
            className="relative overflow-x-hidden text-white"
            ref={projectRef}
          >
            <div className="pt-2 overflow-x-hidden textStroke3">
              <ScrollText text="PROJECTS" />
            </div>
            <div className="mt-10 px-[8vw]">
              <div ref={pro1}>
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
            <div
              className="pt-2 overflow-x-hidden textStroke3"
              ref={scrollTextCol}
            >
              <ScrollText text="CONTACT" rev />
            </div>
            <div className="px-[8vw] ">
              <div className="flex flex-col items-center py-5 space-x-5 lg:py-10 sm:flex-row">
                <div className="py-2 text-4xl textStroke6 md:text-6xl BGB lg:text-7xl">
                  Let's
                </div>
                <MultiscrollText />
              </div>
            </div>
            <div className="absolute px-[8vw] bottom-0 pb-10 flex items-center justify-around w-full space-x-5 ">
              <div className="block w-full h-1 bg-[#1c1c20]"></div>
              <img className="w-10" src="/images/insta.svg" alt="" />
              <img className="w-10" src="/images/github1.svg" alt="" />
              <img className="w-10" src="/images/linkedin.svg" alt="" />
              <div className="block w-full h-1 bg-[#1c1c20]"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
