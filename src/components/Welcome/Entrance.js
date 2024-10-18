/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: jimbogies (https://sketchfab.com/jimbogies)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/sci-fi-spaceship-corridor-cea95926a8e8455b9d236ec1aa97bb60
title: Sci-Fi Spaceship Corridor
*/

import React, { forwardRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Entrance = forwardRef(({ ...props }, entranceRef) => {
  const { nodes, materials } = useLoader(GLTFLoader, "/spaceship/scene.gltf");
  return (
    <group
      ref={entranceRef}
      {...props}
      dispose={null}
      scale={0.1}
      rotation={[Math.PI, 0, -Math.PI]}
      position={[0, -7, -45]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[10.98, -458.68, 139.77]}
          rotation={[1.49, 0.16, 0.01]}
        />
        <lineSegments
          geometry={nodes.Material2.geometry}
          material={nodes.Material2.material}
        />
        <mesh
          geometry={nodes.Material2_1.geometry}
          material={materials.Walls}
        />
        <mesh
          geometry={nodes.Material2_2.geometry}
          material={nodes.Material2_2.material}
        />
        <mesh
          geometry={nodes.Material2_3.geometry}
          material={nodes.Material2_3.material}
        />
        <mesh
          geometry={nodes.Material2_4.geometry}
          material={nodes.Material2_4.material}
        />
        <mesh
          geometry={nodes.Material2_5.geometry}
          material={nodes.Material2_5.material}
        />
        <mesh
          geometry={nodes.Material2_6.geometry}
          material={nodes.Material2_6.material}
        />
        <mesh
          geometry={nodes.Material3.geometry}
          material={materials.Color_A05}
        />
        <mesh
          geometry={nodes.Material2_7.geometry}
          material={materials.Galaxy}
        />
        <mesh
          geometry={nodes.Material2_8.geometry}
          material={materials.Blackout}
        />
        <mesh
          geometry={nodes.Material2_9.geometry}
          material={materials.Light}
        />
        <mesh
          geometry={nodes.Material3_1.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Material2_10.geometry}
          material={materials.Metal02}
        />
        <mesh
          geometry={nodes.Material2_11.geometry}
          material={materials.Metal03}
        />
        <mesh
          geometry={nodes.Material3_2.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Material2_12.geometry}
          material={materials.Floor}
        />
      </group>
    </group>
  );
});

export default Entrance;
