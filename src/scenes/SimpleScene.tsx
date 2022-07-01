import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box3D } from "./components/Box3D";

export const SimpleScene = () => (
  <Canvas resize={{ offsetSize: true }}>
    <ambientLight intensity={0.1} />
    <directionalLight color="white" position={[0, 0, 5]} />
    <Box3D />
    <OrbitControls />
  </Canvas>
);
