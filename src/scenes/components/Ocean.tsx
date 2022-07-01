import { useRef, useMemo, ReactNode } from "react";
import { PlaneGeometry, RepeatWrapping, TextureLoader, Vector3 } from "three";
import { extend, useLoader, useFrame, Object3DNode } from "@react-three/fiber";
import { Water } from "three-stdlib/objects/Water";
import waterNormalsImg from "../textures/waternormals.jpg";

extend({ Water });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      water: Object3DNode<Water, typeof Water>;
    }
  }
}

export function Ocean() {
  const waterRef = useRef<Water & ReactNode>(null!);

  const waterNormals = useLoader(TextureLoader, waterNormalsImg);
  waterNormals.wrapS = waterNormals.wrapT = RepeatWrapping;

  const geom = useMemo(() => new PlaneGeometry(30000, 30000), []);
  const params = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new Vector3(),
      sunColor: 0xeb8934,
      waterColor: 0x0064b5,
      distortionScale: 40,
      fog: false,
    }),
    [waterNormals]
  );

  useFrame((_, delta) => {
    waterRef.current.material.uniforms.time.value += delta;
  });

  return (
    <water
      ref={waterRef}
      args={[geom, params]}
      rotation-x={-Math.PI / 2}
      position={[0, 0, 0]}
    />
  );
}
