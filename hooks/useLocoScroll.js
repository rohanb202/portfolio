import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

//import "../styles/loco.module.css";
gsap.registerPlugin(ScrollTrigger);
export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;
    let locoScroll = null;
    // if (typeof window !== "object") {
    //   return;
    // }
    import("locomotive-scroll").then((LocomotiveScroll) => {
      const scrollEl = document.querySelector("#main");
      locoScroll = new LocomotiveScroll.default({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        class: "is-reveal",
      });
      locoScroll.on("scroll", () => {
        ScrollTrigger.update();
      });

      ScrollTrigger.scrollerProxy(scrollEl, {
        scrollLeft(value) {
          if (locoScroll) {
            //console.log("leftt");
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.x;
          }
          return null;
        },
        scrollTop(value) {
          if (locoScroll) {
            //console.log("downn");
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
          }
          return null;
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });

      const lsUpdate = () => {
        if (locoScroll) {
          locoScroll.update();
        }
      };

      ScrollTrigger.addEventListener("refresh", lsUpdate);
      ScrollTrigger.refresh();

      return () => {
        if (locoScroll) {
          ScrollTrigger.removeEventListener("refresh", lsUpdate);
          locoScroll.destroy();
          locoScroll = null;
          console.log("Kill", locoScroll);
        }
      };
    });
  }, [start]);
}
