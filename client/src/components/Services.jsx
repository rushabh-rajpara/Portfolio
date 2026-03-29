import { Box, Heading, SimpleGrid, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaRocket, FaLaptopCode, FaRegWindowMaximize, FaSlidersH } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const serviceIcons = [FaRocket, FaLaptopCode, FaRegWindowMaximize, FaSlidersH];

const Services = () => {
  const bg = useColorModeValue("bg.canvas", "bg.surfaceMuted");
  const textColor = useColorModeValue("text.primary", "text.primary");
  const headingColor = useColorModeValue("text.primary", "text.primary");
  const cardBg = useColorModeValue("rgba(255,255,255,0.18)", "bg.surface");
  const cardBorderColor = useColorModeValue("rgba(255,255,255,0.36)", "border.soft");
  const mutedText = useColorModeValue("text.secondary", "text.secondary");
  const eyebrowColor = useColorModeValue("brand.300", "brand.300");
  const { t } = useLanguage();

  const cards = t("services.cards");

  const servicesRef = useRef(null);
  const isInView = useInView(servicesRef, { once: true });

  return (
    <MotionBox
      id="services"
      py={{ base: 16, md: 20, lg: 24 }}
      px={{ base: 5, md: 10 }}
      bg={bg}
      color={textColor}
      ref={servicesRef}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      overflow="hidden"
    >
      <Box maxW="1840px" mx="auto">
        <VStack align="start" spacing={5} mb={{ base: 10, md: 14 }}>
          <Text
            fontSize="0.72rem"
            textTransform="uppercase"
            letterSpacing="0.38em"
            color={eyebrowColor}
            fontWeight="600"
          >
            {t("services.eyebrow")}
          </Text>
          <MotionHeading
            fontFamily="heading"
            fontSize={{ base: "2.35rem", md: "3.3rem", lg: "3.8rem" }}
            lineHeight="1"
            letterSpacing="-0.06em"
            color={headingColor}
            maxW="760px"
          >
            {t("services.heading")}
          </MotionHeading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={0}>
          {cards.map((service, index) => (
            <MotionBox
              key={service.title}
              minH={{ base: "250px", md: "300px" }}
              p={{ base: 6, md: 7, lg: 8 }}
              bg={cardBg}
              border="1px solid"
              borderColor={cardBorderColor}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="service-card-grid"
            >
              <VStack align="start" spacing={{ base: 6, md: 8 }} h="100%">
                <Box as={serviceIcons[index]} fontSize={{ base: "28px", md: "32px" }} color="accent.primary" />
                <Heading
                  fontFamily="body"
                  fontSize={{ base: "1.35rem", md: "1.55rem" }}
                  lineHeight="1.08"
                  letterSpacing="-0.04em"
                  fontWeight="800"
                  maxW="14ch"
                >
                  {service.title}
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight="1.65"
                  color={mutedText}
                  maxW="22ch"
                >
                  {service.description}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>

      <style>
        {`
          .service-card-grid {
            transition: background-color 0.22s ease, transform 0.22s ease;
          }
          .service-card-grid:hover {
            transform: translateY(-2px);
            background-color: rgba(255, 255, 255, 0.28);
          }
        `}
      </style>
    </MotionBox>
  );
};

export default Services;
