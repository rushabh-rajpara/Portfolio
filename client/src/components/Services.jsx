import { Box, Heading, SimpleGrid, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaRocket, FaLaptopCode, FaLayerGroup, FaCogs } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const services = [
  {
    title: "MVP Development",
    icon: FaRocket,
    description: "Build a focused MVP quickly with the right core features.",
    outcome: "Launch faster, validate earlier, avoid overbuilding.",
  },
  {
    title: "Custom Web Applications",
    icon: FaLaptopCode,
    description: "Custom web apps tailored to business workflows and operations.",
    outcome: "Dependable software aligned to real business needs.",
  },
  {
    title: "White-Label for Agencies",
    icon: FaLayerGroup,
    description: "Reliable execution support for agency delivery teams.",
    outcome: "Scale capacity while keeping your brand and quality standards.",
  },
  {
    title: "Automation & Internal Tools",
    icon: FaCogs,
    description: "Automation systems and internal tools to reduce repetitive work.",
    outcome: "Improve efficiency with faster and more consistent operations.",
  },
];

const Services = () => {
  const bg = useColorModeValue("white", "black");
  const textColor = useColorModeValue("black", "white");
  const headingColor = useColorModeValue("black", "yellow.400");
  const cardBg = useColorModeValue("#ffc800ab", "gray.800");

  const servicesRef = useRef(null);
  const isInView = useInView(servicesRef, { once: true });

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
        <MotionHeading fontSize="4xl" color={headingColor}>
          Services
        </MotionHeading>
        <Text maxW="800px">Business-focused development services for agencies and growing companies.</Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10} maxW="1200px" mx="auto">
        {services.map((service, index) => (
          <MotionBox
            key={index}
            p={6}
            bg={cardBg}
            borderRadius="md"
            boxShadow="lg"
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <VStack spacing={4} textAlign="center">
              <Box as={service.icon} size="40px" color={headingColor} className="service-icon" />
              <Heading fontSize="2xl">{service.title}</Heading>
              <Text>{service.description}</Text>
              <Text fontWeight="700">{service.outcome}</Text>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>

      <style>
        {`
            .service-card {
              transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            }
            .service-card:hover {
              transform: scale(1.05);
              box-shadow: 0px 0px 15px var(--accent-color);
            }
            .service-icon {
              transition: transform 0.3s ease-in-out;
            }
            .service-card:hover .service-icon {
              transform: rotate(10deg) scale(1.1);
            }
          `}
      </style>
    </MotionBox>
  );
};

export default Services;
