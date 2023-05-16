'use client';
import Image from "next/image";
import { BsLinkedin, BsBehance, BsGoogle } from "react-icons/bs";
import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {Model} from "./Object/model";

const Hero = () => {
    return (
        <div className="hero-container">
         <Canvas
        camera={{
          position: [0, 0, 150]
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 5]}/>
        <Suspense fallback={null}>
           <Model />
           <Preload all/>
        </Suspense>
      </Canvas>
        </div>
    )
}

export default Hero;