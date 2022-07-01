import { Mesh } from "three";
import { BoxProps } from "@react-three/cannon";
import { useRef } from "react";
import { useBox } from "@react-three/cannon";

export function Cube(props: BoxProps) {
  const [ref] = useBox(() => ({ mass: 1, ...props }), useRef<Mesh>(null));
  return (
    <mesh castShadow ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
