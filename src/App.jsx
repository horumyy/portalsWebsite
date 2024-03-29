import { Canvas } from "@react-three/fiber";
import Portal from "./components/Portal";
import { Float, Text, OrbitControls, Sky, Center } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Girl } from "./components/Girl";

function App() {
  const skyBoxModel = useLoader(GLTFLoader, "/skybox.glb");

  return (
    <>
      <Canvas
        gl={{ localClippingEnabled: true }}
        camera={{ fov: 75, position: [0, 0, 7] }}
        eventSource={document.getElementById("root")}
        eventPrefix="client" 
      >
        <OrbitControls
          enablePan={false}
          dampingFactor={0.1}
          enableDamping={true}
          makeDefault
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2}
        />
        <Sky />

        <ambientLight intensity={10} />
        <Center>
          <Float>
            <Portal position={[0, -1, 0]}>
              <group>
                <ambientLight intensity={10} />
                <primitive object={skyBoxModel.scene} />

                <Girl scale={1.5} position={[0, -6, 0.35]} />
              </group>
            </Portal>
            <Girl clip scale={1.5} position={[0, -6, -0.35]} />
          </Float>
        </Center>
      </Canvas>
    </>
  );
}

export default App;
