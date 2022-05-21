import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
//import ScrollTrigger from "gsap/ScrollTrigger";

function sizeTextToBar(size) {
  return (size * 4) / 7;
}
function LogoLoder({ size }) {
  const line = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline();
    let tl2 = gsap.timeline();
    let tl3 = gsap.timeline();
    tl.to(line.current, { rotateZ: "90", duration: 1 })
      .to(line.current, {
        rotateZ: "180",
        duration: 1,
      })
      .to(line.current, {
        rotateZ: "270",
        duration: 1,
      })
      .to(line.current, {
        rotateZ: "360",
        duration: 1,
      })
      .to(line.current, {
        rotateZ: "0",
        duration: 1,
      });
    tl2
      .to(box1.current, { x: "27px", duration: 1 })
      .to(box1.current, { y: "35px", duration: 1 })
      .to(box1.current, { x: "-35px", duration: 1 })
      .to(box1.current, { y: "0px", duration: 1 })
      .to(box1.current, { x: "0px", duration: 1 });
    tl3
      .to(box2.current, { x: "-27px", duration: 1 })
      .to(box2.current, { y: "-35px", duration: 1 })
      .to(box2.current, { x: "+35px", duration: 1 })
      .to(box2.current, { y: "0px", duration: 1 })
      .to(box2.current, { x: "0px", duration: 1 });
  }, []);

  return (
    <div className={` flex flex-col text-[20px] text-[#242423]  BGB`}>
      <div ref={box1}>XO</div>
      <div ref={line} className="inline-block h-1 bg-[#242423] w-[35px]"></div>
      <div ref={box2}>NO</div>
    </div>
  );
}

export default LogoLoder;
