import React, { useMemo } from "react";
import { applyProps } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Instance } from "@react-three/fiber/dist/declarations/src/core/renderer";
import model from "./models/911-transformed.glb?url";

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: Instance;
  };
};

export function Porsche(props: JSX.IntrinsicElements["mesh"]) {
  const { scene, nodes, materials } = useGLTF(model) as GLTFResult;
  useMemo(() => {
    Object.values(nodes).forEach(
      (node) => node.isMesh && (node.receiveShadow = node.castShadow = true)
    );
    applyProps(materials.rubber, {
      color: "#222",
      roughness: 0.6,
      roughnessMap: null,
      normalScale: [4, 4],
    });
    applyProps(materials.window, {
      color: "black",
      roughness: 0,
      clearcoat: 0.1,
    });
    applyProps(materials.coat, {
      envMapIntensity: 4,
      roughness: 0.5,
      metalness: 1,
    });
    applyProps(materials.paint, {
      roughness: 0.5,
      metalness: 0.8,
      color: "#555",
      envMapIntensity: 2,
    });
  }, [nodes, materials]);
  return <primitive {...props} object={scene} />;
}
