import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { BoxGrid } from "./components/BoxGrid";

export const IntroScene = () => (
  <Canvas camera={{ fov: 25, near: 0.1, far: 1000, position: [0, 0, 50] }} resize={{ offsetSize: true }}>
    <ambientLight intensity={0.1} />
    <directionalLight color="white" position={[0, 0, 5]} />
    <BoxGrid position={[-15, -12, 0]} scale={10} delay={500} />
    <BoxGrid position={[15, 5, 0]} scale={2} delay={1200} />
    <BoxGrid position={[-12, 8, 0]} scale={5} delay={600} />
    <OrbitControls />
  </Canvas>
);
