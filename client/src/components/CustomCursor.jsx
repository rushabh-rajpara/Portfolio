import { Box, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const cursorSize = isHovering ? "40px" : "20px";
  const cursorBg = useColorModeValue("rgba(0, 0, 0, 0.3)", "rgba(255, 255, 255, 0.3)");
  const cursorBorder = useColorModeValue("black", "yellow.400");

  useEffect(() => {
    const cursor = cursorRef.current;

    const updateCursor = (e) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX - parseInt(cursorSize) / 2}px, ${e.clientY - parseInt(cursorSize) / 2}px)`;
      }
    };

    const handleMouseMove = (e) => requestAnimationFrame(() => updateCursor(e));

    document.addEventListener("mousemove", handleMouseMove);

    document.body.addEventListener("pointerenter", () => setIsHovering(false));
    document.body.addEventListener("pointerleave", () => setIsHovering(false));

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorSize]);

  return (
    <>
      {/* Main Cursor */}
      <Box
        ref={cursorRef}
        position="fixed"
        top="0"
        left="0"
        width={cursorSize}
        height={cursorSize}
        borderRadius="50%"
        border={`2px solid ${cursorBorder}`}
        bg={cursorBg}
        pointerEvents="none"
        transition="width 0.2s ease, height 0.2s ease"
        style={{ willChange: "transform" }} // Optimized for rendering
        zIndex="10000"
      />
    </>
  );
};

export default CustomCursor;
