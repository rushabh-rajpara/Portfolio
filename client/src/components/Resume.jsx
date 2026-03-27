import {
  Box,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaSearch, FaRocket } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Resume = () => {
  const bg = useColorModeValue("bg.canvas", "bg.canvas");
  const textColor = useColorModeValue("text.primary", "text.primary");
  const headingColor = useColorModeValue("text.primary", "text.primary");
  const cardBg = useColorModeValue("bg.surface", "bg.surface");
  const mutedText = useColorModeValue("text.secondary", "text.secondary");
  const { t } = useLanguage();
  const steps = t("process.steps");

  return (
    <MotionBox
      id="resume"
      py={{ base: 14, md: 20, lg: 24 }}
      px={{ base: 6, md: 20 }}
      bg={bg}
      color={textColor}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      overflow="hidden"
    >
      <VStack spacing={6} textAlign="center" mb={12}>
        <MotionHeading fontSize="4xl" color={headingColor} initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          {t("process.heading")}
        </MotionHeading>
        <Text maxW="740px" fontSize={{ base: "md", md: "lg" }}>{t("process.subheading")}</Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 6, lg: 8 }} maxW="1200px" mx="auto">
        <VStack align="start" spacing={6}>
          <Heading fontSize="2xl" color={headingColor} display="flex" alignItems="center">
            <FaSearch style={{ marginRight: "8px" }} /> {t("process.strategy")}
          </Heading>
          {steps.slice(0, 2).map((item, index) => (
            <MotionBox
              key={index}
              p={6}
              bg={cardBg}
              borderRadius="md"
              boxShadow="card"
              className="resume-card"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.75, delay: index * 0.12 }}
            >
              <Text fontSize="sm" color={mutedText}>{item.label}</Text>
              <Heading fontSize="lg" color={headingColor}>{item.title}</Heading>
              <Text fontWeight="bold">{item.meta}</Text>
              <Text>{item.description}</Text>
            </MotionBox>
          ))}
        </VStack>

        <VStack align="start" spacing={6}>
          <Heading fontSize="2xl" color={headingColor} display="flex" alignItems="center">
            <FaRocket style={{ marginRight: "8px" }} /> {t("process.delivery")}
          </Heading>
          {steps.slice(2, 4).map((item, index) => (
            <MotionBox
              key={index}
              p={6}
              bg={cardBg}
              borderRadius="md"
              boxShadow="card"
              className="resume-card"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.75, delay: index * 0.12 }}
            >
              <Text fontSize="sm" color={mutedText}>{item.label}</Text>
              <Heading fontSize="lg" color={headingColor}>{item.title}</Heading>
              <Text fontWeight="bold">{item.meta}</Text>
              <Text>{item.description}</Text>
            </MotionBox>
          ))}
        </VStack>
      </SimpleGrid>

      <style>
        {`
            .resume-card {
              transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
              border: 1px solid rgba(255, 215, 0, 0.2);
            }
            @media (min-width: 768px) {
              .resume-card:hover {
                transform: translateY(-4px);
                box-shadow: var(--chakra-shadows-cardHover);
                border-color: var(--accent-color);
              }
            }
          `}
      </style>
    </MotionBox>
  );
};

export default Resume;
