import { Box, Heading, SimpleGrid, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaPaintBrush, FaMobileAlt, FaSearch, FaDatabase, FaShoppingCart } from "react-icons/fa";
import { Helmet } from "react-helmet";

// Motion Components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

// Services Data
const services = [
  { title: "Web Development", icon: FaCode, description: "Building responsive and interactive websites using modern technologies." },
  { title: "UI/UX Design", icon: FaPaintBrush, description: "Designing user-friendly interfaces with engaging experiences." },
  { title: "Mobile Development", icon: FaMobileAlt, description: "Creating mobile-first designs and responsive applications." },
  { title: "SEO Optimization", icon: FaSearch, description: "Improving website rankings with optimized SEO strategies." },
  { title: "Database Management", icon: FaDatabase, description: "Handling secure and scalable databases for applications." },
  { title: "eCommerce Solutions", icon: FaShoppingCart, description: "Building online stores with seamless shopping experiences." },
];

const Services = () => {
  // Dark & Light Mode Styles
  const bg = useColorModeValue("white", "black");
  const textColor = useColorModeValue("black", "white");
  const headingColor = useColorModeValue("black", "yellow.400");
  const cardBg = useColorModeValue("#ffc800ab", "gray.800");

  // Hook to optimize section animations
  const servicesRef = useRef(null);
  const isInView = useInView(servicesRef, { once: true });

  return (
    <>
      <Helmet>
        <title>Rushabh Rajpara - Services</title>
        <meta name="description" content="Explore the variety of development and design services offered by Rushabh Rajpara." />
        <meta name="keywords" content="Rushabh Rajpara, Services, Web Development, UI/UX Design, Mobile Development, SEO Optimization, Database Management, eCommerce Solutions" />
        <meta name="author" content="Rushabh Rajpara" />
      </Helmet>
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
        {/* Section Heading */}
        <VStack spacing={6} textAlign="center" mb={12}>
          <MotionHeading fontSize="4xl" color={headingColor} transition={{ duration: 3, repeat: Infinity }}>
            Expertise Area
          </MotionHeading>
          <Text maxW="800px">I offer a variety of development and design services to help bring your ideas to life.</Text>
        </VStack>

        {/* Services Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} maxW="1200px" mx="auto">
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
                {/* Service Icon */}
                <Box as={service.icon} size="40px" color={headingColor} className="service-icon" />
                
                <Heading fontSize="2xl">{service.title}</Heading>
                <Text>{service.description}</Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* CSS for Hover Effects */}
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
    </>
  );
};

export default Services;
