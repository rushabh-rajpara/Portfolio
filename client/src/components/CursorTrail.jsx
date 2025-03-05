import { Box, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const CursorTrail = () => {
  const [particles, setParticles] = useState([]);
  const particleColor = useColorModeValue("var(--accent-color)", "var(--accent-color)");
  const particlesRef = useRef([]); // Store particles outside React state

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newParticle = {
        id: Date.now(), // Use timestamp for unique ID
        x: e.clientX,
        y: e.clientY,
      };

      // Add new particle but limit total to 10
      particlesRef.current.push(newParticle);
      if (particlesRef.current.length > 10) {
        particlesRef.current.shift();
      }

      // Update state only once per frame
      setParticles([...particlesRef.current]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Box position="fixed" top="0" left="0" width="100vw" height="100vh" pointerEvents="none" zIndex="9998">
      {particles.map((particle) => (
        <Box
          key={particle.id}
          position="absolute"
          left={particle.x}
          top={particle.y}
          width="8px"
          height="8px"
          borderRadius="50%"
          bg={particleColor}
          className="trail"
        />
      ))}
      {/* Keyframe Animations */}
      <style>
        {`
          .trail {
            animation: fadeTrail 0.5s ease-out forwards;
          }
          @keyframes fadeTrail {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(2); }
          }
        `}
      </style>
    </Box>
  );
};

export default CursorTrail;
