import { Box, Heading, SimpleGrid, VStack, Text, useColorModeValue, Button, HStack, Badge } from "@chakra-ui/react";
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
  const cardBg = useColorModeValue("#ffd84d40", "gray.800");
  const cardBorderColor = useColorModeValue("yellow.300", "yellow.600");
  const mutedText = useColorModeValue("gray.700", "gray.300");
  const { t } = useLanguage();

  const cards = t("services.cards");

  const servicesRef = useRef(null);
  const isInView = useInView(servicesRef, { once: true });
  const ctaHover = { transform: "translateY(-2px)", boxShadow: "0 0 16px var(--accent-color)" };

  return (
    <MotionBox
      id="services"
      py={{ base: 16, md: 20 }}
      px={{ base: 6, md: 20 }}
      bg={bg}
      color={textColor}
      ref={servicesRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75 }}
      overflow="hidden"
    >
      <VStack spacing={6} textAlign="center" mb={12}>
        <MotionHeading fontSize={{ base: "3xl", md: "4xl" }} color={headingColor}>{t("services.heading")}</MotionHeading>
        <Text maxW="820px" fontSize={{ base: "md", md: "lg" }}>{t("services.subheading")}</Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8} maxW="1200px" mx="auto">
        {cards.map((service, index) => {
          const isFeatured = index < 2;
          return (
            <MotionBox
              key={index}
              p={{ base: 6, md: 7 }}
              bg={cardBg}
              borderRadius="lg"
              boxShadow="card"
              border="1px solid"
              borderColor={isFeatured ? "yellow.400" : cardBorderColor}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: index * 0.12 }}
              className="service-card"
            >
              <VStack spacing={4} textAlign="left" align="start">
                <HStack justify="space-between" w="100%">
                  <Box as={serviceIcons[index]} fontSize="40px" color={headingColor} className="service-icon" />
                  {isFeatured && (
                    <Badge colorScheme="yellow" borderRadius="full" px={2.5} py={1} fontSize="0.65rem">
                      {t("services.featured")}
                    </Badge>
                  )}
                </HStack>
                <Heading fontSize={{ base: "xl", md: "2xl" }}>{service.title}</Heading>
                <Text fontSize="sm" color={mutedText}><strong>{t("services.bestFor")}:</strong> {service.audience}</Text>
                <Text lineHeight="1.75">{service.description}</Text>
                <Text fontWeight="700" lineHeight="1.65">{service.outcome}</Text>
              </VStack>
            </MotionBox>
          );
        })}
      </SimpleGrid>

      <VStack mt={10} spacing={3}>
        <Text textAlign="center" maxW="700px">{t("services.ctaText")}</Text>
        <Button as="a" href="#contact" colorScheme="yellow" background="#ffd700" color="black" size="lg" _hover={{ ...ctaHover, bg: "#f0cb00" }}>
          {t("services.ctaButton")}
        </Button>
      </VStack>

      <style>
        {`
          .service-card {
            transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
            min-height: 290px;
          }
          .service-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--chakra-shadows-cardHover);
            border-color: var(--accent-color);
          }
          .service-icon {
            transition: transform 0.22s ease;
          }
          .service-card:hover .service-icon {
            transform: translateY(-2px) scale(1.04);
          }
        `}
      </style>
    </MotionBox>
  );
};

export default Services;
