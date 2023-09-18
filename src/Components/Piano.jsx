import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Piano(props) {
  const { nodes, materials } = useGLTF("/assets/models/piano/piano_with_chair.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={10}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LayerPIANO_B_KEYS_Paint_Gloss_Black_0.geometry}
            material={materials.Paint_Gloss_Black}
            position={[-0.013, -0.864, 0.843]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LayerPIANO_W_KEYS_Paint_Gloss_White_0.geometry}
            material={materials.Paint_Gloss_White}
            position={[0, -0.907, 0.82]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LayerPIANO_MAIN_Cherry_0.geometry}
            material={materials.Cherry}
            position={[0, 0.238, 0.596]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LayerPIANO_BRASS_Copper_Rough_0.geometry}
            material={materials.Copper_Rough}
            position={[0, 0.239, 0.047]}
          />
        </group>
        <group
          position={[-0.55, -14.406, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group position={[0, 0, 19]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Cherry_#1_0"].geometry
              }
              material={materials.Cherry_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Cherry_#1_0_1"].geometry
              }
              material={materials.Cherry_1_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Cherry_#1_0_2"].geometry
              }
              material={materials.Cherry_1_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Cherry_#1_0_3"].geometry
              }
              material={materials.Cherry_1_2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Cherry_#1_0_4"].geometry
              }
              material={materials.Cherry_1_3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Cherry_#1_0_5"].geometry
              }
              material={materials.Cherry_1_4}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Cherry_#1_0_6"].geometry
              }
              material={materials.Cherry_1_5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Cherry_#1_0_7"].geometry
              }
              material={materials.Cherry_1_6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Cherry_#1_0_8"].geometry
              }
              material={materials.Cherry_1_7}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Cherry_#1_0_9"].geometry
              }
              material={materials.Cherry_1_8}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Cherry_#1_0_10"]
                  .geometry
              }
              material={materials.Cherry_1_9}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Material_#1_0"].geometry
              }
              material={materials.Material_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Material_#1_0_1"]
                  .geometry
              }
              material={materials.Material_1_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Material_#1_0_2"]
                  .geometry
              }
              material={materials.Material_1_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Material_#1_0_3"]
                  .geometry
              }
              material={materials.Material_1_2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Material_#1_0_4"]
                  .geometry
              }
              material={materials.Material_1_3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Material_#1_0_5"]
                  .geometry
              }
              material={materials.Material_1_4}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Material_#1_0_6"]
                  .geometry
              }
              material={materials.Material_1_5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Material_#1_0_7"]
                  .geometry
              }
              material={materials.Material_1_6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Steel_#1_0"].geometry
              }
              material={materials.Steel_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Steel_#1_0_1"].geometry
              }
              material={materials.Steel_1_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Material_#1_0_8"]
                  .geometry
              }
              material={materials.Material_1_7}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Material_#1_0_9"]
                  .geometry
              }
              material={materials.Material_1_8}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Material_#1_0_10"]
                  .geometry
              }
              material={materials.Material_1_9}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Material_#1_0_11"]
                  .geometry
              }
              material={materials.Material_1_10}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Material_#1_0_12"]
                  .geometry
              }
              material={materials.Material_1_11}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Cherry_#1_0_11"]
                  .geometry
              }
              material={materials.Cherry_1_10}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["uploads_files_147002_Piano_chair_Cherry_#1_0_12"]
                  .geometry
              }
              material={materials.Cherry_1_11}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/piano/piano_with_chair.glb");