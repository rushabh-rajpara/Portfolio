import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  useColorModeValue,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { startTransition, useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const MotionBox = motion(Box);
const editorFiles = [
  {
    id: "app",
    label: "app.tsx",
    lines: [
      "export const app = {",
      "  experience: 'clean',",
      "  interactions: 'smooth',",
      "  focus: 'conversion',",
      "};",
    ],
  },
  {
    id: "components",
    label: "components.ts",
    lines: [
      "export const sections = [",
      "  'hero',",
      "  'selected-work',",
      "  'process',",
      "  'contact',",
      "];",
    ],
  },
  {
    id: "sections",
    label: "portfolio.config.ts",
    lines: [
      "export const studio = {",
      "  strategy: 'clear',",
      "  design: 'premium',",
      "  delivery: 'fast',",
      "  quality: 'production',",
      "};",
    ],
  },
  {
    id: "contact",
    label: "contact.ts",
    lines: [
      "export const contact = {",
      "  response: 'prompt',",
      "  timezone: 'Canada',",
      "  collaboration: 'global',",
      "};",
    ],
  },
];

const getTypedLines = (lines, typedChars) => {
  let remaining = typedChars;

  return lines.map((line) => {
    if (remaining <= 0) return "";
    const visible = line.slice(0, remaining);
    remaining -= line.length;
    return visible;
  });
};

const Hero = () => {
  const bg = useColorModeValue(
    "linear-gradient(180deg, #eef0f4 0%, #f4f5f8 100%)",
    "bg.canvas",
  );
  const textColor = useColorModeValue("text.primary", "text.primary");
  const bodyColor = useColorModeValue("text.secondary", "text.secondary");
  const subtleColor = useColorModeValue("text.muted", "text.muted");
  const cardBorder = useColorModeValue("#d9dee7", "whiteAlpha.200");
  const codeCardBg = useColorModeValue("#2c3138", "neutral.800");
  const editorBg = useColorModeValue("#f8fafc", "#0f172a");
  const editorLine = useColorModeValue("#d6dbe4", "rgba(148, 163, 184, 0.16)");
  const editorMuted = useColorModeValue("#7a8699", "#94a3b8");
  const editorCode = useColorModeValue("#16335f", "#dbeafe");
  const activeLineBg = useColorModeValue("rgba(31, 66, 148, 0.08)", "rgba(120, 153, 239, 0.10)");
  const secondaryButtonColor = useColorModeValue("accent.primary", "white");
  const secondaryButtonBg = useColorModeValue("rgba(255,255,255,0.52)", "rgba(255,255,255,0.08)");
  const secondaryButtonHoverBg = useColorModeValue("white", "accent.primary");
  const secondaryButtonHoverBorder = useColorModeValue("brand.200", "accent.primary");
  const { t } = useLanguage();

  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  const [activeFile, setActiveFile] = useState("sections");
  const [typedChars, setTypedChars] = useState(0);
  const [hoveredLine, setHoveredLine] = useState(null);
  const activeSnippet = editorFiles.find((file) => file.id === activeFile) ?? editorFiles[2];
  const typedLines = getTypedLines(activeSnippet.lines, typedChars);
  const totalChars = activeSnippet.lines.reduce((sum, line) => sum + line.length, 0);

  useEffect(() => {
    setTypedChars(0);
    const timers = Array.from({ length: totalChars }, (_, index) =>
      window.setTimeout(() => {
        startTransition(() => {
          setTypedChars(index + 1);
        });
      }, 320 + index * 48),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [activeSnippet]);

  return (
    <MotionBox
      id="home"
      display="flex"
      alignItems="center"
      bg={bg}
      color={textColor}
      ref={heroRef}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45 }}
      overflow="hidden"
      position="relative"
      pt={{ base: 24, md: 28 }}
      pb={{ base: 16, md: 20 }}
      minH={{ base: "auto", md: "100vh" }}
    >
      <Box
        position="absolute"
        inset="0"
        opacity={0.35}
        backgroundImage="linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)"
        backgroundSize={{ base: "34px 34px", md: "44px 44px" }}
        maskImage="linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.1))"
      />

      <Container maxW="1280px" px={{ base: 5, md: 8 }} position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 10, md: 12, lg: 10 }} alignItems="center">
          <VStack align={{ base: "start", md: "start" }} spacing={{ base: 5, md: 7 }} maxW="620px">
            <Text
              fontSize="0.68rem"
              textTransform="uppercase"
              letterSpacing="0.16em"
              color={subtleColor}
              fontWeight="700"
              px={3}
              py={1.5}
              borderRadius="full"
              bg="rgba(255,255,255,0.72)"
              border="1px solid"
              borderColor="border.soft"
            >
              {t("hero.eyebrow")}
            </Text>

            <Heading
              as="h1"
              fontFamily="heading"
              fontSize={{ base: "2.7rem", sm: "3.45rem", md: "5.2rem", xl: "5.8rem" }}
              fontWeight="700"
              lineHeight={{ base: "0.98", md: "0.9" }}
              letterSpacing="-0.08em"
            >
              <Box as="span" display="block">{t("hero.headlineTop")}</Box>
              <Box as="span" display="block">{t("hero.headlineMiddle")}</Box>
              <Box as="span" display="block" color="brand.300">{t("hero.headlineAccent")}</Box>
              <Box as="span" display="block">{t("hero.headlineBottom")}</Box>
            </Heading>

            <Text maxW="540px" fontSize={{ base: "md", md: "xl" }} lineHeight="1.55" color={bodyColor}>
              {t("hero.subheadline")}
            </Text>

            <HStack spacing={4} flexWrap="wrap" w="100%">
              <Button
                as="a"
                href="#contact"
                bg="accent.primary"
                color="white"
                size="lg"
                minW={{ base: "100%", sm: "148px" }}
                boxShadow="card"
                _hover={{ bg: "accent.hover", transform: "translateY(-2px)", boxShadow: "cardHover" }}
              >
                {t("hero.ctaPrimary")}
              </Button>
              <Button
                as="a"
                href="#projects"
                variant="outline"
                size="lg"
                minW={{ base: "100%", sm: "160px" }}
                color={secondaryButtonColor}
                borderColor="border.soft"
                bg={secondaryButtonBg}
                _hover={{ bg: secondaryButtonHoverBg, borderColor: secondaryButtonHoverBorder }}
              >
                {t("hero.ctaSecondary")}
              </Button>
            </HStack>
          </VStack>

          <Box
            position="relative"
            maxW={{ base: "100%", lg: "560px" }}
            ml={{ base: 0, lg: "auto" }}
            display={{ base: "none", md: "block" }}
          >
            <MotionBox
              bg={editorBg}
              borderRadius="xl"
              border="1px solid"
              borderColor={cardBorder}
              p={0}
              boxShadow="0 24px 60px rgba(15, 23, 42, 0.12)"
              overflow="hidden"
              position="relative"
            >
              <HStack
                px={4}
                py={3}
                spacing={2}
                borderBottom="1px solid"
                borderColor={editorLine}
                justify="space-between"
              >
                <HStack spacing={2}>
                  <Box w="8px" h="8px" borderRadius="full" bg="#ff5f57" />
                  <Box w="8px" h="8px" borderRadius="full" bg="#ffbd2e" />
                  <Box w="8px" h="8px" borderRadius="full" bg="#28c840" />
                </HStack>
                <Text minW="84px" textAlign="right" fontSize="xs" textTransform="uppercase" letterSpacing="0.18em" color={editorMuted}>
                  interactive editor
                </Text>
              </HStack>

              <Box px={{ base: 4, md: 6 }} py={{ base: 5, md: 6 }} minH={{ base: "320px", md: "420px" }}>
                <SimpleGrid columns={2} spacing={6} h="100%">
                  <VStack
                    align="start"
                    spacing={3}
                    pr={{ base: 0, md: 2 }}
                    borderRight="1px solid"
                    borderColor={editorLine}
                  >
                    {editorFiles.map((item) => (
                      <Button
                        key={item.id}
                        variant="ghost"
                        justifyContent="start"
                        w="100%"
                        h="auto"
                        px={0}
                        py={1}
                        onClick={() => setActiveFile(item.id)}
                        _hover={{ bg: "transparent" }}
                      >
                        <HStack spacing={3} w="100%" opacity={activeFile === item.id ? 1 : 0.7}>
                          <Box w="8px" h="8px" borderRadius="sm" bg={activeFile === item.id ? "accent.primary" : editorLine} />
                          <Text fontSize="sm" color={activeFile === item.id ? textColor : editorMuted}>
                            {item.label}
                          </Text>
                        </HStack>
                      </Button>
                    ))}
                    <Box w="100%" pt={4}>
                      <Text fontSize="xs" textTransform="uppercase" letterSpacing="0.18em" color={editorMuted} mb={3}>
                        status
                      </Text>
                      <VStack align="start" spacing={2}>
                        <HStack spacing={2}>
                          <Box w="7px" h="7px" borderRadius="full" bg="accent.primary" />
                          <Text fontSize="sm" color={editorMuted}>
                            Active file synced
                          </Text>
                        </HStack>
                        <HStack spacing={2}>
                          <Box w="7px" h="7px" borderRadius="full" bg="#28c840" />
                          <Text fontSize="sm" color={editorMuted}>
                            {`${activeSnippet.label} loaded`}
                          </Text>
                        </HStack>
                      </VStack>
                    </Box>
                  </VStack>

                  <VStack align="start" spacing={3} fontFamily="mono" color={editorCode} minH="100%">
                    <Text fontSize="sm" color={editorMuted}>
                      {activeSnippet.label}
                    </Text>
                    <Box position="relative" w="100%" minH={{ base: "178px", md: "196px" }}>
                      <VStack align="start" spacing={1.5} w="100%" visibility="hidden" pointerEvents="none">
                        {activeSnippet.lines.map((line, index) => (
                          <Text
                            key={`${activeSnippet.label}-ghost-${line}`}
                            fontSize={{ base: "sm", md: "md" }}
                            whiteSpace="nowrap"
                            px={2}
                            py={1}
                          >
                            <Box as="span" display="inline-block" minW="2ch">
                              {`${index + 1}.`}
                            </Box>{" "}
                            {line}
                          </Text>
                        ))}
                      </VStack>

                      <VStack position="absolute" inset="0" align="start" spacing={1.5} w="100%">
                        {activeSnippet.lines.map((line, index) => {
                          const visibleText = typedLines[index];
                          const isActiveLine = hoveredLine === index;
                          const lineStarted = typedChars > activeSnippet.lines.slice(0, index).reduce((sum, current) => sum + current.length, 0);
                          const lineFinished = visibleText.length === line.length;

                          return (
                            <Text
                              key={`${activeSnippet.label}-${line}`}
                              fontSize={{ base: "sm", md: "md" }}
                              whiteSpace="nowrap"
                              px={2}
                              py={1}
                              borderRadius="md"
                              bg={isActiveLine ? activeLineBg : "transparent"}
                              transition="background-color 0.18s ease"
                              onMouseEnter={() => setHoveredLine(index)}
                              onMouseLeave={() => setHoveredLine(null)}
                              opacity={lineStarted ? 1 : 0.65}
                            >
                              <Box as="span" display="inline-block" minW="2ch" color={editorMuted} opacity={0.72}>
                                {`${index + 1}.`}
                              </Box>{" "}
                              {visibleText || "\u00A0"}
                              {lineStarted && !lineFinished && (
                                <Box
                                  as={motion.span}
                                  display="inline-block"
                                  ml={1}
                                  w="8px"
                                  h="1.1em"
                                  bg="accent.primary"
                                  verticalAlign="text-bottom"
                                  animate={{ opacity: [1, 0, 1] }}
                                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                                />
                              )}
                            </Text>
                          );
                        })}
                      </VStack>
                    </Box>

                  </VStack>
                </SimpleGrid>
              </Box>
            </MotionBox>

            <Box
              position="absolute"
              left={{ base: "12px", md: "-36px" }}
              bottom={{ base: "18px", md: "28px" }}
              bg={codeCardBg}
              color="white"
              borderRadius="lg"
              px={5}
              py={4}
              boxShadow="0 20px 34px rgba(15, 23, 42, 0.24)"
              minW={{ base: "220px", md: "250px" }}
            >
              <HStack spacing={2} mb={3}>
                <Box w="8px" h="8px" borderRadius="full" bg="#ff5f57" />
                <Box w="8px" h="8px" borderRadius="full" bg="#ffbd2e" />
                <Box w="8px" h="8px" borderRadius="full" bg="#28c840" />
              </HStack>

              <Text fontFamily="mono" fontSize="sm" lineHeight="1.55" whiteSpace="pre-line">
                {"const studio = {\n  precision: true,\n  performance: 100\n};"}
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </MotionBox>
  );
};

export default Hero;
