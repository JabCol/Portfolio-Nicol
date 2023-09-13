import { createRoot} from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import SenCosAnimation from "./Components/SenCosAnimation";
import Info from "./Components/Info";
import Figuras3D from "./Components/Figuras3D";
import "./Styles/styles.css"

const root = createRoot(document.getElementById('root'));

root.render(
    <>
        <Info 
            name={"Nicol Valeria Ortiz R."}
            biografhy={"I'm a programmer at Universidad del Valle"}
        />
        <Canvas 
        camera={{ 
            position: [0, 0, 5] 
        }}>
            <ambientLight intensity={0.5} />
            {/* <Figuras3D position={[0,0,0]} />  */}
            <SenCosAnimation funcion= {"seno"} color= {"pink"} />
            <SenCosAnimation funcion= {"cos"} color= {"purple"} />
        </Canvas>
    </>
);

