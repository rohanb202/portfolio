import { useState, useRef, useMemo, Suspense, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  Point,
  OrbitControls,
  Html,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Pointss({ sts }) {
  const scroll = useScroll();
  const count = 100;
  const sep = 1.5;
  let ref = useRef(null);
  let positions = useMemo(() => {
    let positions = [];

    for (let sp = 0; sp < 1000; sp++) {
      const degree1 = 2 * Math.PI * Math.random();
      const degree2 = 2 * Math.PI * Math.random();
      let x = sep * Math.sin(degree1) * Math.cos(degree2) * 1;
      let y = sep * Math.sin(degree1) * Math.sin(degree2) * 1;
      let z = sep * Math.cos(degree1) * 1;
      positions.push(x, y, z);
    }

    return new Float32Array(positions);
  }, [count, sep]);
  const camera = useThree((state) => state.camera);
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 1;
    ref.current.rotation.y -= delta / 1.5;
    // camera.position.z = scroll.offset * 120;
    // console.log(scroll);
    //console.log(scroll.offset);
  });
  useEffect(() => {
    if (sts) {
      camera.position.z = 1.6;
    } else {
      camera.position.z = 10000;
    }
    console.log(camera.position.z);
  }, [sts, camera]);

  //   useEffect(() => {

  //   }, [sts]);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled={false}
        // {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function Sphere({ state }) {
  return (
    <div className="w-screen h-[125vh] sm:h-screen  overflow-y-hidden ">
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas
          colorManagement={false}
          camera={{ position: [0, 0, 1.6], fov: 80 }}
        >
          <ScrollControls>{<Pointss sts={state} />}</ScrollControls>
          <Html fullscreen>
            <div className="flex items-center justify-center w-full h-full">
              <h1 className="text-xl text-center text-white uppercase BGB sm:py-10 md:text-3xl lg:text-5xl">
                IT&apos;S <span className="textStroke3">ALL</span> ABOUT MAKING
                <br /> THINGS <span className="textStroke3">HAPPEN</span> .
              </h1>
            </div>
          </Html>
          <OrbitControls enableZoom={false} enableDamping={true} />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default Sphere;
