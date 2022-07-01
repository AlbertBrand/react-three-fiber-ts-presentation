import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, DotScreen, Bloom } from "@react-three/postprocessing";
import { Knot } from "./components/Knot";

export const TorusScene = () => (
  <Canvas resize={{ offsetSize: true }} camera={{ position: [0, 0, 10] }}>
    <pointLight position={[15, 15, 15]} intensity={1} />
    <Knot />
    <EffectComposer>
      <DotScreen scale={0.2} />
      <Bloom luminanceThreshold={0} luminanceSmoothing={0.1} height={30} />
    </EffectComposer>
    <OrbitControls />
  </Canvas>
);
