import { MeshPortalMaterial, Float, Text } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { geometry } from "maath";

extend(geometry);

function Portal({ width = 6, height = 10, children, ...props }) {
  const portal = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <group {...props}>
      <mesh>
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <MeshPortalMaterial ref={portal} side={THREE.DoubleSide}>
          <Text
            color="DeepPink"
            fontSize={0.7}
            letterSpacing={-0.015}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwIYqWqZPBQ.ttf"
            anchorY="top"
            outlineColor="DeepPink"
            outlineWidth={0.01}
            anchorX="left"
            lineHeight={0.8}
            position={[-2.7, 4.7, 0.01]}
          >
            Jorge Plasencia
          </Text>

          <Text
            color="DeepPink"
            fontSize={0.3}
            letterSpacing={-0.015}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwIYqWqZPBQ.ttf"
            anchorY="top"
            anchorX="left"
            lineHeight={0.8}
            position={[-2.7, 3.9, 0.01]}
          >
            Software Engineer
          </Text>
          <Text
            color="DeepPink"
            fontSize={0.5}
            letterSpacing={-0.015}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwIYqWqZPBQ.ttf"
            anchorY="top"
            anchorX="left"
            lineHeight={0.8}
            position={[-2.7, 3.1, 0.01]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => window.open("/CV_Jorge_Plasencia.pdf")}
          >
            Curriculum Vitae
          </Text>
          <Text
            color="DeepPink"
            fontSize={0.5}
            letterSpacing={-0.015}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwIYqWqZPBQ.ttf"
            anchorY="top"
            anchorX="left"
            lineHeight={0.8}
            position={[-2.7, 2.3, 0.01]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => window.open("https://github.com/horumyy")}
          >
            GitHub
          </Text>
          <Text
            color="DeepPink"
            fontSize={0.5}
            letterSpacing={-0.015}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwIYqWqZPBQ.ttf"
            anchorY="top"
            anchorX="left"
            lineHeight={0.8}
            position={[-2.7, 1.7, 0.01]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() =>
              window.open("https://www.linkedin.com/in/jorgeplasenciaa/")
            }
          >
            LinkedIn
          </Text>
          <Text
            color="DeepPink"
            fontSize={0.5}
            letterSpacing={-0.015}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwIYqWqZPBQ.ttf"
            anchorY="top"
            anchorX="left"
            lineHeight={0.8}
            position={[-2.7, 1.1, 0.01]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => window.open("mailto:jorge@horuhe.dev")}
          >
            Mail
          </Text>
          <color attach="background" />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  );
}

export default Portal;
