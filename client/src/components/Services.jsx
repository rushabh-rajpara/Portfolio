import { Box, Heading, SimpleGrid, VStack, Text, useColorModeValue, Button } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaRocket, FaLaptopCode, FaLayerGroup, FaCogs } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const serviceIcons = [FaRocket, FaLaptopCode, FaLayerGroup, FaCogs];

const Services = () => {
  const bg = useColorModeValue("white", "black");
  const textColor = useColorModeValue("black", "white");
  const headingColor = useColorModeValue("black", "yellow.400");
  const cardBg = useColorModeValue("#ffc800ab", "gray.800");
  const cardBorderColor = useColorModeValue("yellow.300", "yellow.600");
  const { t } = useLanguage();

  const cards = t("services.cards");

  const servicesRef = useRef(null);
  const isInView = useInView(servicesRef, { once: true });
  const ctaHover = { transform: "translateY(-2px)", boxShadow: "0 0 16px var(--accent-color)" };

  return (
    <MotionBox
      id="services"
      py={20}
      px={{ base: 6, md: 20 }}
      bg={bg}
      color={textColor}
      ref={servicesRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      overflow="hidden"
    >
      <VStack spacing={6} textAlign="center" mb={12}>
        <MotionHeading fontSize="4xl" color={headingColor}>{t("services.heading")}</MotionHeading>
        <Text maxW="820px">{t("services.subheading")}</Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10} maxW="1200px" mx="auto">
        {cards.map((service, index) => (
          <MotionBox
            key={index}
            p={7}
            bg={cardBg}
            borderRadius="md"
            boxShadow="lg"
            className="service-card"
            border="1px solid"
            borderColor={cardBorderColor}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <VStack spacing={4} textAlign="left" align="start">
              <Box as={serviceIcons[index]} size="40px" color={headingColor} className="service-icon" />
              <Heading fontSize="2xl">{service.title}</Heading>
              <Text fontSize="sm" opacity={0.9}><strong>{t("services.bestFor")}:</strong> {service.audience}</Text>
              <Text>{service.description}</Text>
              <Text fontWeight="700">{service.outcome}</Text>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>

      <VStack mt={10} spacing={3}>
        <Text textAlign="center" maxW="700px">{t("services.ctaText")}</Text>
        <Button as="a" href="#contact" colorScheme="yellow" background="#ffd700" size="lg" _hover={{ ...ctaHover, bg: "#ffd700" }}>
          {t("services.ctaButton")}
        </Button>
      </VStack>

      <style>
        {`
            .service-card {
              transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
              min-height: 280px;
            }
            .service-card:hover {
              transform: scale(1.03);
              box-shadow: 0px 0px 15px var(--accent-color);
            }
            .service-icon {
              transition: transform 0.3s ease-in-out;
            }
            .service-card:hover .service-icon {
              transform: rotate(8deg) scale(1.08);
            }
          `}
      </style>
    </MotionBox>
  );
};

export default Services;

