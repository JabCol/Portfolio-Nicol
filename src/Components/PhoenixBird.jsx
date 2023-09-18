import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const PhoenixBird = ({ radius, speed }) =>{

    const phoenixRef = useRef()
    const phoenixModel = useGLTF("/assets/models/phoenix_bird/phoenix_bird.glb")
    const {animations} = phoenixModel;
    const { actions } = useAnimations(animations, phoenixRef);
    console.log(phoenixModel)

    // useFrame( (delta)=>{
    //     phoenixRef.current.position.x += 1 * delta;
    // } )
    // useFrame(({ clock }) => {
    //     const elapsedTime = clock.getElapsedTime();
    //     const x = radius * Math.cos(speed * elapsedTime);
    //     const y = radius * Math.sin(speed * elapsedTime);
    //     const z = 0; // Mantén la coordenada z constante si solo quieres un movimiento en 2D
    
    //     if (phoenixRef.current) {
    //         phoenixRef.current.position.set(x, y, z);
    //     }
    //   });
    
    useEffect( ()=>{
        const action = actions["Take 001"]
        action.play()
    } )

    return <>
        <mesh ref={phoenixRef} position-x={-2} rotation-y={-Math.PI * 0.15} scale={0.0009}>
            <primitive  object={phoenixModel.scene}/>
        </mesh>
    </>
}

export default PhoenixBird;
useGLTF.preload("/assets/models/phoenix_bird/phoenix_bird.glb");