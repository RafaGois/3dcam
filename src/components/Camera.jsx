import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Camera(props) {
  const { nodes, materials } = useGLTF("/models/camera.glb");

  return (
    <group {...props} dispose={null} >
      <group rotation={[-Math.PI / 2.0, 0, 0.5]} scale={20}>
        <mesh
          geometry={nodes["#CAM0001_Body_#CAM0001_Textures_0"].geometry}
          material={materials.CAM0001_Textures}
        />
        <mesh
          geometry={
            nodes["#CAM0001_Battery_Check_#CAM0001_Textures_0"].geometry
          }
          material={materials.CAM0001_Textures}
          position={[0.05, 0.001, 0.072]}
        />
        <mesh
          geometry={nodes["#CAM0001_Spool_#CAM0001_Textures_0"].geometry}
          material={materials.CAM0001_Textures}
          position={[0.05, 0.001, 0.075]}
        />
        <mesh
          geometry={nodes["#CAM0001_Film_Advance_#CAM0001_Textures_0"].geometry}
          material={materials.CAM0001_Textures}
          position={[-0.057, 0.001, 0.077]}
        />
        <mesh
          geometry={nodes["#CAM0001_Shutter_#CAM0001_Textures_0"].geometry}
          material={materials.CAM0001_Textures}
          position={[-0.035, -0.006, 0.076]}
        />
        <mesh
          geometry={
            nodes["#CAM0001_Shutter_Speed_#CAM0001_Textures_0"].geometry
          }
          material={materials.CAM0001_Textures}
          position={[-0.057, 0.001, 0.073]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/camera.glb");
