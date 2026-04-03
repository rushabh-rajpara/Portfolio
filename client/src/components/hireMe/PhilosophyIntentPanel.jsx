import { Box, HStack, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const MotionBox = motion(Box);

const panelGlow = {
  initial: { opacity: 0.55, scale: 0.96 },
  active: { opacity: 1, scale: 1, transition: { duration: 0.22, ease: "easeOut" } },
};

const connectorPath = (start, end) => {
  const midY = start.y + (end.y - start.y) * 0.42;
  return `M ${start.x} ${start.y} C ${start.x} ${midY}, ${end.x} ${midY}, ${end.x} ${end.y}`;
};

const IntentNode = ({ node, isActive, onHover, onLeave, onSelect, isMobile }) => {
  const coords = isMobile ? node.position.mobile : node.position.desktop;

  return (
    <Box
      as="button"
      type="button"
      position="absolute"
      left={`${coords.x}%`}
      top={`${coords.y}%`}
      transform="translate(-50%, -50%)"
      zIndex="3"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      onClick={onSelect}
      aria-pressed={isActive}
      aria-label={`Activate ${node.name} principle`}
    >
      <MotionBox
        px={{ base: 3, md: 3.5 }}
        py={{ base: 2, md: 2.5 }}
        borderRadius="full"
        bg={isActive ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.08)"}
        border="1px solid"
        borderColor={isActive ? "rgba(209, 220, 244, 0.98)" : "rgba(255,255,255,0.12)"}
        color={isActive ? "#132033" : "rgba(235,241,252,0.86)"}
        boxShadow={isActive ? "0 12px 24px rgba(10, 19, 34, 0.24)" : "none"}
        animate={isActive ? "active" : "initial"}
        variants={panelGlow}
        whileTap={{ scale: 0.98 }}
      >
        <Text
          fontSize={{ base: "0.68rem", md: "0.72rem" }}
          fontWeight="800"
          letterSpacing="0.12em"
          textTransform="uppercase"
          whiteSpace="nowrap"
        >
          {node.name}
        </Text>
      </MotionBox>
    </Box>
  );
};

const DecisionMapCard = ({ activeNode }) => (
  <MotionBox
    position="absolute"
    left={{ base: "18px", md: "24px" }}
    bottom={{ base: "18px", md: "24px" }}
    w={{ base: "160px", md: "214px" }}
    minH={{ base: "138px", md: "154px" }}
    borderRadius="18px"
    bg="#0b1220"
    border="1px solid rgba(120, 153, 239, 0.18)"
    boxShadow="0 18px 30px rgba(0, 0, 0, 0.26)"
    key={activeNode.id}
    initial={{ opacity: 0.55, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.22, ease: "easeOut" }}
  >
    <VStack align="stretch" spacing={2.5} p={4}>
      <Text
        fontSize="0.66rem"
        textTransform="uppercase"
        letterSpacing="0.18em"
        color="#6e84b6"
        fontWeight="800"
      >
        Decision Map
      </Text>
      {activeNode.decisionMapItems.map((item, index) => (
        <HStack key={item} spacing={2.5} align="center">
          <Box
            h={index === 0 ? "3px" : "2px"}
            w={`${58 - index * 8}%`}
            bg={index % 2 === 0 ? "#44d19d" : index === 1 ? "#4c6fff" : "#7ac9ff"}
            borderRadius="full"
          />
          <Text fontSize="0.72rem" color="rgba(226, 234, 249, 0.82)" whiteSpace="nowrap">
            {item}
          </Text>
        </HStack>
      ))}
    </VStack>
  </MotionBox>
);

const ActivePrincipleCard = ({ label, activeNode }) => (
  <MotionBox
    position="absolute"
    right={{ base: "18px", md: "24px" }}
    bottom={{ base: "22px", md: "34px" }}
    maxW={{ base: "156px", md: "194px" }}
    bg="rgba(255,255,255,0.94)"
    border="1px solid rgba(217, 223, 232, 0.96)"
    borderRadius="18px"
    px={4}
    py={3.5}
    boxShadow="0 18px 34px rgba(20, 33, 58, 0.14)"
    key={activeNode.id}
    initial={{ opacity: 0.55, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.22, ease: "easeOut" }}
  >
    <VStack align="start" spacing={2}>
      <Text
        fontSize="0.66rem"
        textTransform="uppercase"
        letterSpacing="0.16em"
        color="brand.500"
        fontWeight="800"
      >
        {label}
      </Text>
      <Text fontSize="sm" fontWeight="800" color="#171c27">
        {activeNode.shortLabel}
      </Text>
      <Text fontSize="xs" lineHeight="1.6" color="#59677c">
        {activeNode.description}
      </Text>
    </VStack>
  </MotionBox>
);

const PhilosophyIntentPanel = ({ config }) => {
  const [selectedId, setSelectedId] = useState(config.principles[0].id);
  const [hoveredId, setHoveredId] = useState(null);
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;

  const activeId = hoveredId ?? selectedId;
  const activeNode = useMemo(
    () => config.principles.find((item) => item.id === activeId) ?? config.principles[0],
    [activeId, config.principles],
  );

  const center = useMemo(
    () => (isMobile ? { x: 50, y: 50 } : { x: 50, y: 48 }),
    [isMobile],
  );

  return (
    <MotionBox
      minH={{ base: "320px", md: "430px" }}
      h="100%"
      borderRadius={{ base: "24px", md: "28px" }}
      overflow="hidden"
      position="relative"
      bg="radial-gradient(circle at 25% 18%, rgba(86, 114, 173, 0.28), transparent 30%), linear-gradient(145deg, #101723 0%, #192331 46%, #0f141d 100%)"
      boxShadow="0 28px 52px rgba(17, 28, 49, 0.18)"
    >
      <Box
        position="absolute"
        inset="22px"
        borderRadius="22px"
        border="1px solid rgba(255,255,255,0.06)"
        bg="linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))"
      />

      <Box position="absolute" top={{ base: "22px", md: "24px" }} left={{ base: "24px", md: "28px" }}>
        <Text
          fontSize="0.66rem"
          textTransform="uppercase"
          letterSpacing="0.18em"
          color="rgba(201, 216, 248, 0.78)"
          fontWeight="800"
        >
          {config.title}
        </Text>
      </Box>

      <MotionBox
        position="absolute"
        top={{ base: "54px", md: "58px" }}
        left={{ base: "22px", md: "26px" }}
        right={{ base: "22px", md: "26px" }}
        bottom={{ base: "132px", md: "106px" }}
        borderRadius="24px"
        border="1px solid rgba(255,255,255,0.08)"
        bg="linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.012))"
      >
        <Box
          as="svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          position="absolute"
          inset="0"
          w="100%"
          h="100%"
        >
          {config.principles.map((node) => {
            const coords = isMobile ? node.position.mobile : node.position.desktop;
            const isActive = node.id === activeNode.id;
            return (
              <g key={node.id}>
                <path
                  d={connectorPath(center, coords)}
                  fill="none"
                  stroke={isActive ? "rgba(132, 176, 255, 0.9)" : "rgba(107, 122, 145, 0.34)"}
                  strokeWidth={isActive ? 0.8 : 0.45}
                  strokeLinecap="round"
                  strokeDasharray={isActive ? "0" : "1.4 1.6"}
                />
              </g>
            );
          })}
        </Box>

        <MotionBox
          position="absolute"
          left={`${center.x}%`}
          top={`${center.y}%`}
          transform="translate(-50%, -50%)"
          zIndex="2"
          px={{ base: 4, md: 5 }}
          py={{ base: 3, md: 3.5 }}
          borderRadius="full"
          bg="rgba(255,255,255,0.96)"
          border="1px solid rgba(209, 220, 244, 0.98)"
          boxShadow="0 18px 30px rgba(10, 19, 34, 0.20)"
        >
          <VStack spacing={0.5}>
            <Text
              fontSize="0.64rem"
              textTransform="uppercase"
              letterSpacing="0.16em"
              color="#6b7a91"
              fontWeight="800"
            >
              Core
            </Text>
            <Text
              fontSize={{ base: "0.8rem", md: "0.88rem" }}
              color="#152033"
              fontWeight="900"
              letterSpacing="0.1em"
              textTransform="uppercase"
            >
              {config.centerLabel}
            </Text>
          </VStack>
        </MotionBox>

        {config.principles.map((node) => (
          <IntentNode
            key={node.id}
            node={node}
            isActive={node.id === activeNode.id}
            isMobile={isMobile}
            onHover={() => setHoveredId(node.id)}
            onLeave={() => setHoveredId(null)}
            onSelect={() => setSelectedId(node.id)}
          />
        ))}
      </MotionBox>

      <DecisionMapCard activeNode={activeNode} />
      <ActivePrincipleCard label={config.activeLabel} activeNode={activeNode} />
    </MotionBox>
  );
};

export default PhilosophyIntentPanel;
