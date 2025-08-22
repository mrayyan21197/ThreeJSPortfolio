import { Html, useProgress } from "@react-three/drei";

const ThreeLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="text-xl font-normal text-center">
      {progress}% Loaded
    </Html>
  );
};

export default ThreeLoader;
