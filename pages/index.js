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
import { useRouter } from "next/router";
import Sphere from "../components/Sphere";
import MainText from "../components/MainText";
import MainTitle from "../components/MainTitle";

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
  let shaStart = useRef(null);
  const st1 = useRef(null);
  const st2 = useRef(null);
  const st3 = useRef(null);
  const st4 = useRef(null);
  const st5 = useRef(null);
  const st6 = useRef(null);
  const st7 = useRef(null);
  const st8 = useRef(null);
  const st9 = useRef(null);
  const st10 = useRef(null);
  const st11 = useRef(null);
  const st12 = useRef(null);
  const st13 = useRef(null);
  const st14 = useRef(null);
  const stacks = useRef(null);
  const cfollow = useRef(null);
  const xonoPast = useRef(null);
  let router = useRouter();
  const [sphere, setSphere] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    if (!sessionStorage.getItem("is_reloaded")) {
      router.push("/");
    }
    sessionStorage.setItem("is_reloaded", true);

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
        start: "+=50%",
        end: "+=100%",
        markers: true,
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
        start: "+=50%",
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
        start: "+=50%",
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
    let tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: shaStart.current,
        start: "+=50%",
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
    const stackss = [
      st1.current,
      st2.current,
      st3.current,
      st4.current,
      st5.current,
      st6.current,
      st7.current,
      st8.current,
      st9.current,
      st10.current,
      st11.current,
      st12.current,
      st13.current,
      st14.current,
    ];
    ScrollTrigger.matchMedia({
      "(min-width: 640px)": function () {
        stackss.forEach((stack, i) => {
          tl6.fromTo(
            stack,
            { xPercent: "-100" },

            {
              x: `${(stackss.length - i - 1) * (stack.offsetWidth / 2) * 0.3}`,
              ease: "none",
            },
            0
          );
          tl6.to(stack, { opacity: 1 }, 0);
        });
        tl6.to(
          cfollow.current,
          { x: `${stacks.current.offsetWidth / 2}`, opacity: 0 },
          "<"
        );
      },
      "(max-width: 640px)": function () {
        stackss.forEach((stack, i) => {
          tl6.fromTo(
            stack,
            { yPercent: "100" },

            {
              y: `${-(stackss.length - i - 1) * (stack.offsetWidth / 2) * 0.3}`,
              ease: "none",
            },
            0
          );
          tl6.to(stack, { opacity: 1 }, 0);
        });
        tl6.to(
          cfollow.current,
          { x: `${stacks.current.offsetWidth / 2}`, opacity: 0 },
          "<"
        );
      },
    });

    ats.forEach((at, i) => {
      tl5.to(at, {
        y: `${i * at.offsetHeight * 0.1}`,
        ease: "none",
      });
    });
    tl4.to(itachi.current, {
      y: `${itachi.current.offsetHeight / 3}`,
    });

    gsap.to(glow.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: animeRef.current,

        scrub: 0.2,
        start: "top top",
      },
    });
    gsap.to(shaRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: homeRef.current,

        scrub: 0.2,
        start: "top top",
      },
    });
    // tl2.to(shaRef.current, {
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: shaStart.current,
    //   },
    // });
    tl2
      .to(shaRef.current, {
        rotation: 360 * 5,

        scale: 1,

        ease: "none",
        scrollTrigger: {
          trigger: homeRef.current,
          pin: true,
          scrub: 0.2,
          start: "bottom bottom",
          end: "+=125%",
        },
      })
      .to(
        stacks.current,
        {
          opacity: 0,
          scrollTrigger: {
            trigger: homeRef.current,
            pin: true,
            scrub: 0.2,
            start: "top top",
            end: "+=125%",
          },
        },

        "<"
      );
    gsap.to(
      cfollow.current,
      {
        opacity: 1,
        scrollTrigger: {
          trigger: xono.current,

          scrub: 0.2,
          start: "top top",
          end: "center cenetr",
        },
      },

      "<"
    );
    const [y, yEnd] = [0, xono.current.scrollHeight / 1];

    console.log(y, yEnd);
    let tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: xono.current,
        scrub: 0.2,
        start: "+=75%",
        end: "+=100%",
      },
      reversed: true,
    });
    tl7.fromTo(
      cfollow.current,
      { y: y },
      {
        y: yEnd,
      }
    );
    gsap.to(cfollow.current, {
      visibility: "hidden",
      opacity: 0,
      scrollTrigger: {
        trigger: shaStart.current,
        scrub: 0.2,
        start: "top top",
        end: "center center",
      },
    });

    ScrollTrigger.create({
      trigger: shaStart.current,

      start: "-=25%",
      onEnter: () => {
        //console.log("enter");
        setSphere(true);
      },
      onLeave: () => {
        //console.log("leave");
        setSphere(false);
      },
      onEnterBack: () => {
        //console.log("enterBack");
        setSphere(true);
      },
      onLeaveBack: () => {
        //console.log("leaveBack");
        setSphere(false);
      },
      end: "+=75%",
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
          <div className="relative p-5 text-white sm:p-10 BGB">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span data-aos="fade-up" className="textStroke3 ">
                Hey, I&apos;m{" "}
              </span>
              <span data-aos="fade-up" className=" whitespace-nowrap">
                Rohan Bhandari
              </span>{" "}
              <br />
              <span
                data-aos="fade-up"
                className="textStroke3 whitespace-nowrap"
              >
                But you can call me
              </span>
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
          {/* <div className="absolute  w-full text-white bg-[#1C1C20]  h-[30vh] z-[1]"></div> */}
        </section>
        <div
          className="relative -top-[2vh] inset-x-0 min-w-[10px] w-[0.8%] mx-auto opacity-100 "
          ref={cfollow}
        >
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            className="opacity-0 xl:opacity-100"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>

        <div ref={shaStart} className="relative overflow-hidden ">
          <div className="w-screen h-[125vh] sm:h-screen absolute bg-transparent  z-[3]"></div>
          <div className="relative z-[1]">
            <Sphere state={sphere} />
          </div>
        </div>

        <div className="relative" id="about">
          <section
            className="relative h-[100vh] text-5xl text-white lg:text-9xl"
            ref={homeRef}
          >
            <div className="absolute h-[100vh] w-[100vw] top-[50%]   text-white BGB px-[8vw] mx-auto inset-x-0">
              <div ref={stacks} className="relative mx-auto inext-x-0 ">
                <div
                  ref={st1}
                  className="w-[75%]  h-[75%]  absolute min-w-[300px] min-h-[300px]   opacity-0 stack stack2  "
                >
                  <svg
                    viewBox="0 0 220 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#845EC2"
                    className="opacity-100"
                  >
                    <rect width="100" height="100" />
                  </svg>
                </div>
                <div
                  ref={st2}
                  className="w-[75%]  h-[75%] min-w-[300px] min-h-[300px]   absolute   stack stack2  opacity-0  "
                >
                  <svg
                    viewBox="0 0 220 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#845EC2"
                    className="opacity-80"
                  >
                    <rect width="100" height="100" />
                  </svg>
                </div>
                <div
                  ref={st3}
                  className="w-[75%]  h-[75%] min-w-[300px] min-h-[300px]   absolute   stack stack2  opacity-0 "
                >
                  <svg
                    viewBox="0 0 220 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#845EC2"
                    className="opacity-60"
                  >
                    <rect width="100" height="100" />
                  </svg>
                </div>
                <div
                  ref={st4}
                  className="w-[75%]  h-[75%] min-w-[300px] min-h-[300px]   absolute   stack stack2  opacity-0 "
                >
                  <svg
                    viewBox="0 0 220 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#845EC2"
                    className="opacity-40"
                  >
                    <rect width="100" height="100" />
                  </svg>
                </div>
                <div
                  ref={st5}
                  className="w-[75%]  h-[75%] min-w-[300px] min-h-[300px]   absolute   stack stack2 opacity-0 "
                >
                  <svg
                    viewBox="0 0 220 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#845EC2"
                    className="opacity-20"
                  >
                    <rect width="100" height="100" />
                  </svg>
                </div>
                <div
                  ref={st6}
                  className="w-[75%]  h-[75%] min-w-[300px] min-h-[300px]   absolute   stack stack2 opacity-0 "
                >
                  <svg
                    viewBox="0 0 220 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#845EC2"
                    className="opacity-10 "
                  >
                    <rect width="100" height="100" stroke="#845EC2" />
                  </svg>
                </div>
                <div
                  ref={st7}
                  className="w-[75%]  h-[75%] min-w-[300px] min-h-[300px]   absolute   stack stack2 opacity-0 "
                >
                  <svg
                    viewBox="0 0 220 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="transparent"
                    className=""
                  >
                    <rect width="100" height="100" stroke="#845EC2" />
                  </svg>
                </div>
                <div
                  ref={st8}
                  className="w-[75%]  h-[75%] min-w-[300px] min-h-[300px]   absolute   stack stack2 opacity-0 "
                >
                  <svg
                    viewBox="0 0 220 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="transparent"
                    className=""
                  >
                    <rect width="100" height="100" stroke="#845EC2" />
                  </svg>
                </div>
                <div
                  ref={st9}
                  className="w-[75%]  h-[75%] min-w-[300px] min-h-[300px]   absolute stack stack2   opacity-0 "
                >
                  <svg
                    viewBox="0 0 220 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="transparent"
                    className=""
                  >
                    <rect width="100" height="100" stroke="#845EC2" />
                  </svg>
                </div>
                <div
                  ref={st10}
                  className="w-[75%]  h-[75%] min-w-[300px] min-h-[300px]   absolute stack stack2   opacity-0 "
                >
                  <svg
                    viewBox="0 0 220 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="transparent"
                    className=""
                  >
                    <rect width="100" height="100" stroke="#845EC2" />
                  </svg>
                </div>
                <div
                  ref={st11}
                  className="w-[75%]  h-[75%] min-w-[300px] min-h-[300px]   absolute stack stack2   opacity-0 "
                >
                  <svg
                    viewBox="0 0 220 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="transparent"
                    className=""
                  >
                    <rect width="100" height="100" stroke="#845EC2" />
                  </svg>
                </div>
                <div
                  ref={st12}
                  className="w-[75%]  h-[75%] min-w-[300px] min-h-[300px]   absolute stack stack2   opacity-0 "
                >
                  <svg
                    viewBox="0 0 220 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="transparent"
                    className=""
                  >
                    <rect width="100" height="100" stroke="#845EC2" />
                  </svg>
                </div>
                <div
                  ref={st13}
                  className="w-[75%]  h-[75%] min-w-[300px] min-h-[300px]   absolute stack stack2   opacity-0 "
                >
                  <svg
                    viewBox="0 0 220 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="transparent"
                    className=""
                  >
                    <rect width="100" height="100" stroke="#845EC2" />
                  </svg>
                </div>
                <div
                  ref={st14}
                  className="w-[75%]  h-[75%] min-w-[300px] min-h-[300px]   absolute stack stack2   opacity-0 "
                >
                  <svg
                    viewBox="0 0 220 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="transparent"
                    className=""
                  >
                    <rect width="100" height="100" stroke="#845EC2" />
                  </svg>
                </div>
                <div className="relative -top-[25%] flex items-center justify-center w-full h-full">
                  <h1 className="py-5 text-xl  leading-loose text-center sm:py-10 md:text-3xl lg:text-5xl z-[2] uppercase">
                    make them{" "}
                    <span data-aos="fade-right" className="textStroke3">
                      {" "}
                      interesting
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <div
              className="opacity-0 glow w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]  "
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

          <section className="relative sm:top-0 -top-[10rem]" ref={animeRef}>
            <div className="relative mx-auto inset-x-0 -top-[10rem] lg:-top-[20rem]  flex justify-center py-10 ">
              <img
                ref={itachi}
                src="/images/sbg3.png"
                className=" relative inset-x-0 mx-auto  object-cover min-w-[800px] scale-[1.2] z-[1] "
                alt=""
              />
            </div>
            <div className="relative sm:-top-[30vh]  flex flex-col items-center justify-center w-full text-center text-white BGB text-4xl  lg:text-7xl z-[3] uppercase  ">
              <div ref={at3} className="absolute textStroke3">
                and <br />
                awesome too
              </div>
              <div ref={at2} className="absolute textStroke3 ">
                and <br />
                awesome too
              </div>
              <div ref={at1} className="absolute ">
                and <br /> awesome too
              </div>
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
              <div ref={pro1} id="project">
                <Project
                  no="01"
                  text="LinkedIn Clone"
                  date="May 2022"
                  link="/images/p1.png"
                  parag="Where you can post feeds, integrated with news on side panel using news API and features
dark mode. Made with Next JS, Next Auth with MongoDB adapter as Google Auth, using Tailwind CSS for
styling , Recoil for state management, MongoDB as database"
                />
              </div>
              <Project
                no="02"
                text="Instagram Clone"
                date="May 2022"
                link="/images/p2.png"
                parag="A mobile responsive web app where you can post feed with like and comment functionality, using Next JS ,Tailwind CSS, Firebasev9 and Recoil for state management."
                rev
              />
              <Project
                no="03"
                text="Ecommerce Websitee"
                date="May 2022"
                link="/images/p3.png"
                parag="An ecommerce store built with MERN stack, Node provides the backend environment for this application
Express middleware is used to handle requests, routes. Mongoose schemas to model the application data,
React for displaying UI components, Redux to manage application's state Redux Thunk middleware to handle
asynchronous redux actions
"
              />
              <Project
                no="04"
                text="Kashiyatra 2022"
                date="May 2022"
                link="/images/p4.jpg"
                parag="It's an Annual Socio-Cultural festival of Indian Institute of Technology (BHU) Varanasi, Worked as a frontend
web developer there."
                rev
              />
            </div>
          </section>
          <section className="h-screen" ref={contactRef}>
            <div
              className="pt-2 overflow-x-hidden sm:hidden textStroke3"
              ref={scrollTextCol}
            >
              <ScrollText text="CONTACT" rev />
            </div>
            <div className="px-[8vw]">
              <div className="flex flex-col items-center justify-center space-y-[10%] pt-14 md:space-y-2 md:items-start md:pt-44">
                <a
                  href="mailto:rohanb22250@gmail.com"
                  className="uppercase md:text-9xl xl:text-[12rem] BGB wordSpacing transition-all duration-100 ease-in-out text-5xl hover:scale-105 
                  hidden md:block
                  hover:lg:tracking-[2rem]  hover:xl:tracking-[4rem] hover:text-[#fe0944] "
                >
                  Ready?
                </a>
                <a
                  href="mailto:rohanb22250@gmail.com"
                  className="relative transition-all duration-100 ease-in-out md:hidden w-[200px] h-[200px] hover:scale-105 group"
                >
                  <div className="rounded-full relative w-[200px] transition-all duration-100 ease-in-out bg-black group-hover:bg-[#fe0944]    h-[200px]"></div>
                  <h1
                    href=""
                    className="relative z-[1] -top-[51%] flex justify-center text-gray-200 uppercase BGB group-hover:animate-pulse"
                  >
                    Email Me
                  </h1>
                </a>
                <div className="flex flex-col items-center justify-around py-2 space-x-5 md:justify-start lg:py-10 md:flex-row">
                  <div className="py-2 text-4xl textStroke6 md:text-6xl BGB lg:text-7xl">
                    Let&apos;s
                  </div>
                  <div className="hidden sm:block">
                    <MultiscrollText />
                  </div>
                </div>
              </div>
              <div className="relative inset-x-0 mx-auto sm:hidden">
                <MultiscrollText />
              </div>
            </div>
            <div
              id="contact"
              className="absolute px-[8vw] bottom-0 pb-10 flex items-center justify-around w-full space-x-5"
            >
              <div
                className="block w-full h-1 bg-[#1c1c20]"
                rel="noreferrer"
              ></div>
              <a href="">
                <img className="w-20" src="/images/insta.svg" alt="" />
              </a>
              <a
                target="_blank"
                href="https://github.com/rohanb202 "
                rel="noreferrer"
              >
                <img className="w-20" src="/images/github1.svg" alt="" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/rohan-bhandari-8824b0209/"
                rel="noreferrer"
              >
                <img className="w-20" src="/images/linkedin.svg" alt="" />
              </a>

              <div className="block w-full h-1 bg-[#1c1c20]"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
