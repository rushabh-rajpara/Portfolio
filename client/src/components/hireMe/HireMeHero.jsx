import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { hireMeHero } from "../../content/hireMeContent";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const CodeLine = ({ accent, line }) => (
  <Text
    fontFamily="'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace"
    fontSize={{ base: "xs", md: "sm" }}
    lineHeight="1.95"
    color="#d6def6"
    whiteSpace="pre-wrap"
  >
    <Box
      as="span"
      color={
        accent === "const"
          ? "#86b7ff"
          : accent === "return" || accent === "await"
            ? "#c9a2ff"
            : accent === "//"
              ? "#5b729f"
              : "#6ef0c2"
      }
    >
      {accent}
    </Box>
    {accent && line ? " " : null}
    <Box as="span" color={line.includes("'") ? "#ffd06e" : "#d6def6"}>
      {line}
    </Box>
  </Text>
);

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const HireMeHero = () => {
  const [activeViewId, setActiveViewId] = useState(hireMeHero.views[0].id);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const activeView = useMemo(
    () => hireMeHero.views.find((view) => view.id === activeViewId) ?? hireMeHero.views[0],
    [activeViewId],
  );

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setTilt({
      x: (py - 0.5) * -10,
      y: (px - 0.5) * 10,
    });
  };

  const resetPointer = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <Box
      as="section"
      bg="linear-gradient(180deg, #f7f8fb 0%, #f2f4f8 62%, #eef1f5 100%)"
      borderBottom="1px solid rgba(209, 216, 226, 0.72)"
      overflow="hidden"
    >
      <Container
        maxW="1340px"
        px={{ base: 5, md: 7 }}
        pt={{ base: 16, md: 24 }}
        pb={{ base: 22, md: 30 }}
      >
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={{ base: 16, xl: 14 }}
          alignItems="center"
        >
          <MotionVStack
            align="start"
            spacing={{ base: 7, md: 9 }}
            maxW="640px"
            initial="hidden"
            animate="show"
          >
            <MotionBox variants={fadeUp} custom={0}>
              <Text
                fontSize="0.72rem"
                fontWeight="800"
                textTransform="uppercase"
                letterSpacing="0.28em"
                color="brand.500"
              >
                {hireMeHero.eyebrow}
              </Text>
            </MotionBox>

            <MotionVStack align="start" spacing={5} variants={fadeUp} custom={0.08}>
              <Heading
                as="h1"
                fontFamily="'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Georgia, serif"
                fontSize={{ base: "3rem", md: "4.6rem", xl: "5.4rem" }}
                lineHeight={{ base: "0.98", md: "0.92" }}
                letterSpacing="-0.06em"
                color="#161b25"
                fontWeight="500"
              >
                {hireMeHero.supportingHeadline}
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                lineHeight="1.78"
                color="#445368"
                maxW="34ch"
              >
                {hireMeHero.description}
              </Text>
            </MotionVStack>

            <MotionBox variants={fadeUp} custom={0.16}>
              <HStack spacing={4} flexWrap="wrap" pt={1}>
                <Button
                  as="a"
                  href={hireMeHero.primaryCta.href}
                  target={hireMeHero.primaryCta.isExternal ? "_blank" : undefined}
                  rel={hireMeHero.primaryCta.isExternal ? "noopener noreferrer" : undefined}
                  size="lg"
                  bg="brand.600"
                  color="white"
                  rightIcon={<HiArrowRight />}
                  _hover={{ bg: "brand.500", transform: "translateY(-2px)", boxShadow: "card" }}
                  _active={{ transform: "translateY(0)" }}
                >
                  {hireMeHero.primaryCta.label}
                </Button>
                <Button
                  as="a"
                  href={hireMeHero.secondaryCta.href}
                  size="lg"
                  variant="ghost"
                  bg="whiteAlpha.900"
                  color="#1d4aa8"
                  border="1px solid rgba(209, 216, 226, 0.9)"
                  _hover={{ bg: "white", borderColor: "#bfd0f6", transform: "translateY(-2px)" }}
                  _active={{ transform: "translateY(0)" }}
                >
                  {hireMeHero.secondaryCta.label}
                </Button>
              </HStack>
            </MotionBox>

            <MotionBox variants={fadeUp} custom={0.22}>
              <VStack align="start" spacing={4}>
                <Text fontSize="sm" fontWeight="600" color="#69758a">
                  {hireMeHero.availability}
                </Text>

                <HStack spacing={2.5} flexWrap="wrap">
                  {hireMeHero.highlights.map((item) => (
                    <Box
                      key={item}
                      px={3.5}
                      py={2}
                      borderRadius="full"
                      bg="rgba(255,255,255,0.82)"
                      border="1px solid rgba(213, 220, 230, 0.95)"
                      color="#4e5b70"
                      fontSize="sm"
                      fontWeight="700"
                      boxShadow="0 10px 24px rgba(20, 33, 58, 0.04)"
                    >
                      {item}
                    </Box>
                  ))}
                </HStack>
              </VStack>
            </MotionBox>
          </MotionVStack>

          <MotionBox
            initial={{ opacity: 0, y: 32, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
          >
            <Flex
              justify={{ base: "flex-start", xl: "flex-end" }}
              position="relative"
              py={{ base: 2, md: 4 }}
              onMouseMove={handlePointerMove}
              onMouseLeave={resetPointer}
            >
              <MotionBox
                position="absolute"
                top="-24px"
                right={{ base: "10%", xl: "8%" }}
                w="180px"
                h="180px"
                borderRadius="full"
                bg="radial-gradient(circle, rgba(61, 107, 211, 0.18) 0%, rgba(61, 107, 211, 0) 72%)"
                animate={{
                  x: tilt.y * 0.9,
                  y: tilt.x * 0.9,
                }}
                transition={{ type: "spring", stiffness: 110, damping: 18 }}
                pointerEvents="none"
              />

              <MotionBox
                position="relative"
                w="100%"
                maxW={{ base: "100%", xl: "580px" }}
                borderRadius="22px"
                border="1px solid rgba(207, 215, 226, 0.96)"
                bg="#ffffff"
                boxShadow="0 24px 60px rgba(24, 36, 63, 0.10)"
                overflow="hidden"
                animate={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                  y: -2,
                }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Flex
                  align="center"
                  justify="space-between"
                  px={5}
                  py={3}
                  bg="#f7f4f2"
                  borderBottom="1px solid rgba(216, 222, 232, 0.9)"
                >
                  <HStack spacing={2}>
                    <Box w="10px" h="10px" borderRadius="full" bg="#f1c9c5" />
                    <Box w="10px" h="10px" borderRadius="full" bg="#f3e0ab" />
                    <Box w="10px" h="10px" borderRadius="full" bg="#c8e8c5" />
                  </HStack>
                  <Text
                    fontSize="xs"
                    fontWeight="600"
                    color="#737b8b"
                    fontFamily="'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace"
                  >
                    {hireMeHero.codeWindowTitle}
                  </Text>
                  <Box w="52px" />
                </Flex>

                <HStack
                  spacing={2}
                  px={{ base: 4, md: 5 }}
                  py={3}
                  bg="#fbfcfe"
                  borderBottom="1px solid rgba(226, 230, 238, 0.9)"
                >
                  {hireMeHero.views.map((view) => {
                    const isActive = view.id === activeView.id;
                    return (
                      <Button
                        key={view.id}
                        type="button"
                        size="sm"
                        variant="ghost"
                        borderRadius="full"
                        bg={isActive ? "#e9f0ff" : "transparent"}
                        color={isActive ? "#163b8d" : "#64748b"}
                        fontWeight="700"
                        aria-pressed={isActive}
                        onClick={() => setActiveViewId(view.id)}
                        _hover={{ bg: isActive ? "#e9f0ff" : "#f2f5fa" }}
                      >
                        {view.label}
                      </Button>
                    );
                  })}
                </HStack>

                <MotionBox
                  key={activeView.id}
                  bg="#060c1e"
                  px={{ base: 5, md: 7 }}
                  py={{ base: 6, md: 7 }}
                  minH={{ base: "360px", md: "420px" }}
                  initial={{ opacity: 0.35, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <Text
                    mb={4}
                    fontFamily="'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace"
                    fontSize="xs"
                    textTransform="uppercase"
                    letterSpacing="0.16em"
                    color="#6f83ad"
                  >
                    {activeView.title}
                  </Text>
                  {activeView.lines.map((item, index) => (
                    <CodeLine key={`${activeView.id}-${index}`} accent={item.accent} line={item.line} />
                  ))}
                </MotionBox>
              </MotionBox>

              <MotionBox
                position="absolute"
                right={{ base: "14px", md: "-18px" }}
                top={{ base: "96px", md: "120px" }}
                bg="rgba(255,255,255,0.92)"
                borderRadius="16px"
                border="1px solid rgba(214, 220, 230, 0.96)"
                boxShadow="0 18px 34px rgba(20, 33, 58, 0.10)"
                px={4}
                py={3}
                display={{ base: "none", md: "block" }}
                animate={{
                  x: tilt.y * -0.8,
                  y: tilt.x * -0.8,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
              >
                <VStack align="start" spacing={2}>
                  <Text
                    fontSize="0.68rem"
                    textTransform="uppercase"
                    letterSpacing="0.18em"
                    color="brand.500"
                    fontWeight="800"
                  >
                    Proof Points
                  </Text>
                  {activeView.proofChips.map((chip) => (
                    <Text key={chip} fontSize="sm" fontWeight="700" color="#445368">
                      {chip}
                    </Text>
                  ))}
                </VStack>
              </MotionBox>

              <MotionBox
                position="absolute"
                left={{ base: "20px", md: "-18px" }}
                bottom={{ base: "-18px", md: "-24px" }}
                bg="white"
                borderRadius="18px"
                border="1px solid rgba(214, 220, 230, 0.96)"
                boxShadow="0 18px 34px rgba(20, 33, 58, 0.14)"
                px={5}
                py={4}
                minW={{ base: "220px", md: "250px" }}
                animate={{
                  x: tilt.y * -1.2,
                  y: tilt.x * -1.2,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
              >
                <HStack spacing={4} align="center">
                  <Flex
                    align="center"
                    justify="center"
                    w="36px"
                    h="36px"
                    borderRadius="full"
                    bg="brand.600"
                    color="white"
                    fontWeight="800"
                  >
                    A+
                  </Flex>
                  <Box>
                    <Text fontSize="sm" fontWeight="800" color="#171c27">
                      {activeView.metricLabel}
                    </Text>
                    <Text fontSize="xs" color="#69758a">
                      {activeView.metricSubtext}
                    </Text>
                  </Box>
                </HStack>
                <Box mt={4} h="4px" borderRadius="full" bg="#d7e0f3" overflow="hidden">
                  <MotionBox
                    h="100%"
                    bg="brand.600"
                    borderRadius="full"
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        activeView.id === "frontend"
                          ? "88%"
                          : activeView.id === "backend"
                            ? "80%"
                            : "72%",
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                </Box>
              </MotionBox>
            </Flex>
          </MotionBox>
        </SimpleGrid>

        <MotionBox
          mt={{ base: 18, md: 24 }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: "easeOut" }}
        >
          
        </MotionBox>
      </Container>
    </Box>
  );
};

export default HireMeHero;
