import { useMemo } from "react";
import { applyProps } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Instance } from "@react-three/fiber/dist/declarations/src/core/renderer";
import model from "../models/911-transformed.glb";

type GLTFResult = GLTF & {
  materials: {
    [key: string]: Instance;
  };
};

export function Porsche(props: JSX.IntrinsicElements["mesh"]) {
  const { scene, materials } = useGLTF(model) as GLTFResult;
  useMemo(() => {
    applyProps(materials.paint, {
      color: "blue",
    });
  }, [materials]);
  return <primitive {...props} object={scene} />;
}
