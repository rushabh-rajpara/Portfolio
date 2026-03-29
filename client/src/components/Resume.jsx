import {
  Box,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaSearch, FaMapMarkedAlt, FaTools, FaRocket } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const MotionBox = motion(Box);
const stepIcons = [FaSearch, FaMapMarkedAlt, FaTools, FaRocket];

const Resume = () => {
  const bg = useColorModeValue("bg.canvas", "bg.tint");
  const textColor = useColorModeValue("text.primary", "text.primary");
  const headingColor = useColorModeValue("text.primary", "text.primary");
  const mutedText = useColorModeValue("text.secondary", "text.secondary");
  const subtleColor = useColorModeValue("brand.300", "brand.300");
  const paleNumber = useColorModeValue("rgba(16, 43, 117, 0.12)", "rgba(120, 153, 239, 0.48)");
  const { t } = useLanguage();
  const steps = t("process.steps");

  return (
    <MotionBox
      id="resume"
      py={{ base: 16, md: 20, lg: 24 }}
      px={{ base: 5, md: 10 }}
      bg={bg}
      color={textColor}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      overflow="hidden"
    >
      <Box maxW="1840px" mx="auto">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 6, lg: 12 }} mb={{ base: 10, md: 12 }}>
          <VStack align="start" spacing={3}>
            <Text
              fontSize="0.68rem"
              textTransform="uppercase"
              letterSpacing="0.22em"
              color={subtleColor}
              fontWeight="600"
            >
              {t("process.eyebrow")}
            </Text>
            <Heading
              fontFamily="heading"
              fontSize={{ base: "2.2rem", md: "3rem" }}
              lineHeight="0.96"
              letterSpacing="-0.06em"
              color={headingColor}
            >
              {t("process.heading")}
            </Heading>
          </VStack>

          <Text
            alignSelf={{ base: "start", lg: "center" }}
            justifySelf={{ base: "start", lg: "end" }}
            maxW="360px"
            fontSize={{ base: "sm", md: "md" }}
            lineHeight="1.7"
            textTransform="uppercase"
            letterSpacing="0.08em"
            color={mutedText}
          >
            {t("process.subheading")}
          </Text>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={{ base: 8, md: 7, xl: 6 }}>
          {steps.map((item, index) => {
            const IconComp = stepIcons[index];
            return (
              <MotionBox
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <Text fontFamily="heading" fontSize={{ base: "2rem", md: "2.4rem" }} color={paleNumber} mb={4}>
                  {`0${index + 1}`}
                </Text>
                <Heading fontSize={{ base: "lg", md: "xl" }} mb={3} lineHeight="1.05">
                  {item.title}
                </Heading>
                <Text fontSize="sm" color={mutedText} lineHeight="1.7" mb={5}>
                  {item.description}
                </Text>
                <VStack align="start" spacing={2}>
                  <HStack spacing={2} color={subtleColor}>
                    <Box as={IconComp} boxSize={3.5} />
                    <Text fontSize="0.58rem" textTransform="uppercase" letterSpacing="0.2em">
                      {item.meta}
                    </Text>
                  </HStack>
                  <HStack spacing={2} color={subtleColor}>
                    <Box w="10px" h="1px" bg="currentColor" />
                    <Text fontSize="0.58rem" textTransform="uppercase" letterSpacing="0.2em">
                      {item.label}
                    </Text>
                  </HStack>
                </VStack>
              </MotionBox>
            );
          })}
        </SimpleGrid>
      </Box>
    </MotionBox>
  );
};

export default Resume;
