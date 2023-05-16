"use client";
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
    nodes: {
        Wolf3D_Body: THREE.Mesh;
        Wolf3D_Head: THREE.Mesh;
        Wolf3D_Teeth : THREE.Mesh;
        EyeLeft: THREE.Mesh;
        EyeRight: THREE.Mesh;
        Wolf3D_Outfit_Bottom: THREE.Mesh;
        Wolf3D_Glasses: THREE.Mesh;
        Wolf3D_Outfit_Footwear: THREE.Mesh;
        Wolf3D_Outfit_Top: THREE.Mesh;
        Wolf3D_Hair: THREE.Mesh;
     
    };

    materials: {
        Wolf3D_Body: THREE.MeshStandardMaterial;
        Wolf3D_Skin: THREE.MeshStandardMaterial;
        Wolf3D_Teeth: THREE.MeshStandardMaterial;
        Wolf3D_Eye: THREE.MeshStandardMaterial;
        Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial;
        Wolf3D_Glasses: THREE.MeshStandardMaterial;
        Wolf3D_Outfit_Top: THREE.MeshStandardMaterial;
        Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial;
        Wolf3D_Hair: THREE.MeshStandardMaterial;
       
      };
};
type ActionName = "Door RightAction" | "Door LeftAction.001";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export const Model = (props) =>  {
    const { nodes, materials } = useGLTF("/images/model.glb");
    return (
      <group {...props} dispose={null}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
      </group>
    );
  }
