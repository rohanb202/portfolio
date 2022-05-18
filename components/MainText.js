import React from "react";
import { useState, useEffect } from "react";

function MainText({ text }) {
  const [hover, setHover] = useState(false);
  //   useEffect(() => {
  //     // if (hover) {
  //     //   setTimeout(() => {
  //     //     setHover(false);
  //     //   }, 2000);
  //     // }
  //     console.log(hover);
  //   }, [hover]);
  return (
    <div
      className="relative flex text-6xl cursor-pointer sm:text-7xl BGB"
      onMouseLeave={() =>
        setTimeout(() => setTimeout(() => setHover(false), 500))
      }
    >
      <h1 onMouseEnter={() => setHover(true)} className="relative textStroke2 ">
        {text}
      </h1>
      <h1
        className={`absolute textStroke ${
          hover ? "activeHover" : "nonActiveHover"
        } `}
      >
        {text}
      </h1>
    </div>
  );
}

export default MainText;
