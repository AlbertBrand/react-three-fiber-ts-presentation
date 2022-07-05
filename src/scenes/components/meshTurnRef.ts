import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function meshTurnRef() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    ref.current.rotation.z += 0.01;
    ref.current.rotation.y += 0.001;
  });
  return ref;
}
