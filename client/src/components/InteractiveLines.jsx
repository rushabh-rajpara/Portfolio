import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

// Function to generate random colors
const getRandomColor = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFD700", "#FF8C00"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const InteractiveLines = () => {
  const linesRef = useRef([]); // Store lines outside React state
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const handleClick = (event) => {
      const newLine = {
        id: Date.now(),
        x: event.clientX,
        y: event.clientY,
        color: getRandomColor(),
      };

      // Limit number of active lines to prevent memory leaks
      linesRef.current.push(newLine);
      if (linesRef.current.length > 4) {
        linesRef.current.shift(); // Remove oldest
      }

      // Update React state with new line data
      setLines([...linesRef.current]);

      // Remove the line after 2 seconds
      requestAnimationFrame(() => {
        setTimeout(() => {
          linesRef.current = linesRef.current.filter((line) => line.id !== newLine.id);
          setLines([...linesRef.current]);
        }, 2000);
      });
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <Box position="fixed" top="0" left="0" width="100vw" height="100vh" pointerEvents="none">
      {lines.map((line) => (
        <Box key={line.id} position="absolute" top="0" left="0">
          {/* Vertical Line */}
          <Box
            position="absolute"
            top={line.y}
            left={line.x}
            width="2px"
            height="100vh"
            bg={line.color}
            className="fade-line"
          />
          {/* Horizontal Line */}
          <Box
            position="absolute"
            top={line.y}
            left={line.x}
            width="100vw"
            height="2px"
            bg={line.color}
            className="fade-line"
          />
        </Box>
      ))}
      {/* Keyframe Animations */}
      <style>
        {`
          .fade-line {
            opacity: 0.25;
            animation: fadeOut 2s ease-out forwards, expand 1s ease-out forwards;
          }

          @keyframes fadeOut {
            0% { opacity: 0.25; }
            100% { opacity: 0; }
          }

          @keyframes expand {
            0% { transform: scale(0.5); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </Box>
  );
};

export default InteractiveLines;
