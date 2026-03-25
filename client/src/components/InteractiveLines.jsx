import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const getRandomColor = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFD700", "#FF8C00"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const InteractiveLines = () => {
  const linesRef = useRef([]);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const handleClick = (event) => {
      const newLine = {
        id: Date.now(),
        x: event.clientX,
        y: event.clientY,
        color: getRandomColor(),
      };

      linesRef.current.push(newLine);
      if (linesRef.current.length > 4) {
        linesRef.current.shift();
      }

      setLines([...linesRef.current]);

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
          <Box position="absolute" top={line.y} left={line.x} width="2px" height="100vh" bg={line.color} className="fade-line" />
          <Box position="absolute" top={line.y} left={line.x} width="100vw" height="2px" bg={line.color} className="fade-line" />
        </Box>
      ))}
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
