import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import { RobotPlayground } from "../components/RobotPlayground";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import ThreeLoader from "../components/ThreeLoader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space" id="home">
      <HeroText />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 0.5, 5] }}>
          <Suspense fallback={<ThreeLoader />}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Float>
              <RobotPlayground
                scale={isMobile ? 2.0 : 2.35}
                position={isMobile ? [1, -3.0, 0] : [3, -6, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 15, 2 + state.mouse.y / 15, 5],
      0.5,
      delta
    );
  });
}

export default Hero;
