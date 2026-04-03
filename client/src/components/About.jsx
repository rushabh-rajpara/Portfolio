import { useRef } from "react";
import {
  Box,
  Heading,
  Text,
  HStack,
  Button,
  useColorModeValue,
  VStack,
  Badge,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const bg = useColorModeValue("bg.alt", "bg.alt");
  const textColor = useColorModeValue("text.primary", "text.primary");
  const headingColor = useColorModeValue("text.primary", "text.primary");
  const mutedColor = useColorModeValue("text.secondary", "text.secondary");
  const { t } = useLanguage();

  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true });
  const ctaHover = { transform: "translateY(-2px)", boxShadow: "cardHover" };

  return (
    <Box
      id="about"
      py={{ base: 14, md: 20, lg: 24 }}
      px={{ base: 6, md: 20 }}
      bg={bg}
      color={textColor}
      ref={aboutRef}
      overflow="hidden"
    >
      <HStack
        align="center"
        spacing={{ base: 8, md: 12 }}
        flexWrap="wrap"
        justify="center"
        maxW="1200px"
        mx="auto"
        flexDirection={{ base: "column", md: "row" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Box display="flex" justifyContent="center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={aboutInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <DotLottieReact
              src="https://lottie.host/c1c6a87e-8b37-4e2b-b6f5-fc51469e037c/yOCTgija8O.lottie"
              loop
              autoplay
              style={{ width: "240px", height: "240px", opacity: 0.9 }}
            />
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <VStack align={{ base: "center", md: "start" }} spacing={{ base: 3, md: 4 }} maxW="680px">
            <Heading fontFamily="heading" fontSize={{ base: "2.5rem", md: "3rem" }} lineHeight="1.02" mb={2} color={headingColor}>{t("about.heading")}</Heading>
            <Box w="56px" h="2px" bg="accent.primary" borderRadius="full" />
            <Text fontSize={{ base: "md", md: "lg" }} maxW="650px" lineHeight="1.8" color={mutedColor}>{t("about.p1")}</Text>
            <Text maxW="650px" lineHeight="1.8" color={mutedColor}>{t("about.p2")}</Text>
            <Text maxW="650px" lineHeight="1.8" color={mutedColor}>{t("about.p3")}</Text>
            <Text maxW="650px" lineHeight="1.8" color={mutedColor}>{t("about.p4")}</Text>

            <Wrap spacing={3} pt={1} justify={{ base: "center", md: "start" }}>
              <WrapItem><Badge colorScheme="brand" px={3} py={1} borderRadius="full">{t("about.badge1")}</Badge></WrapItem>
              <WrapItem><Badge colorScheme="brand" px={3} py={1} borderRadius="full">{t("about.badge2")}</Badge></WrapItem>
            </Wrap>

            <HStack mt={4} spacing={{ base: 4, md: 6 }} flexWrap="wrap" justify={{ base: "center", md: "flex-start" }}>
              <Text fontSize="xl" fontWeight="700" letterSpacing="0.03em">~ Rushabh</Text>
              <Button bg="accent.primary" color="white" size="lg" as="a" href="#contact" _hover={{ ...ctaHover, bg: "accent.hover" }}>
                {t("about.cta")}
              </Button>
            </HStack>
          </VStack>
        </motion.div>
      </HStack>
    </Box>
  );
};

export default About;
