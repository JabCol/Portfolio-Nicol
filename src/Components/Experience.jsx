import { OrbitControls } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { Stars } from "@react-three/drei";
import SenCosAnimation from "./SenCosAnimation";
import { Piano } from "./Piano";
import PhoenixBird from "./PhoenixBird";

const Experience = () => {

  const PATH = "/assets/textures/wood/";
  const propsTexture = useTexture({
    map: PATH + "woodColor.jpg",
    // displacementMap: PATH + 'woodHeight.png',
    normalMap: PATH + "woodNormal.jpg",
    roughnessMap: PATH + "woodRoughness.png",
    aoMap: PATH + "woodAO.jpg",
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <OrbitControls makeDefault />
      <SenCosAnimation funcion={"seno"} color={"pink"} />
      <SenCosAnimation funcion={"cos"} color={"red"} />
       <Stars count={3000} />
      <Piano position={[0, -2, 0]} scale={0.1}/>
      <PhoenixBird />
      <mesh position-y={-2} rotation-x={-Math.PI / 2}>
        <planeGeometry attach="geometry" args={[12, 12]} />
        <meshStandardMaterial {...propsTexture} attach="material" color="red" />
      </mesh>
    </>
  );
};

export default Experience;
