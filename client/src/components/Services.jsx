import { Box, Heading, SimpleGrid, VStack, Text, useColorModeValue, Button } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaRocket, FaLaptopCode, FaLayerGroup, FaCogs } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const services = [
  {
    title: "MVP Development",
    icon: FaRocket,
    audience: "For startups and teams validating a product idea",
    description: "Launch a focused version of your product quickly with only the features that matter first.",
    outcome: "Validate earlier, reduce wasted build time, and move faster with real user feedback.",
    featured: true,
  },
  {
    title: "Custom Web Applications",
    icon: FaLaptopCode,
    audience: "For businesses with specific workflows or operations",
    description: "Build tailored web applications that match how your team and customers actually work.",
    outcome: "Get scalable systems that improve day-to-day execution and long-term reliability.",
    featured: false,
  },
  {
    title: "White-Label Development for Agencies",
    icon: FaLayerGroup,
    audience: "For agencies needing reliable execution support",
    description: "Extend your delivery capacity with dependable development that fits your standards and deadlines.",
    outcome: "Take on more projects confidently without sacrificing quality or client experience.",
    featured: true,
  },
  {
    title: "Automation & Internal Tools",
    icon: FaCogs,
    audience: "For teams losing time to repetitive manual tasks",
    description: "Design internal tools and automation workflows to reduce bottlenecks and repetitive work.",
    outcome: "Improve team efficiency with faster operations and fewer avoidable errors.",
    featured: false,
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
          Services Built for Business Outcomes
        </MotionHeading>
        <Text maxW="820px">
          Practical development support for agencies, small businesses, and local Canadian clients who need reliable execution and clear communication.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10} maxW="1200px" mx="auto">
        {services.map((service, index) => (
          <MotionBox
            key={index}
            p={7}
            bg={cardBg}
            borderRadius="md"
            boxShadow="lg"
            className="service-card"
            border={service.featured ? "1px solid" : "none"}
            borderColor={service.featured ? "yellow.500" : "transparent"}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <VStack spacing={4} textAlign="left" align="start">
              <Box as={service.icon} size="40px" color={headingColor} className="service-icon" />
              <Heading fontSize="2xl">{service.title}</Heading>
              <Text fontSize="sm" opacity={0.9}><strong>Best for:</strong> {service.audience}</Text>
              <Text>{service.description}</Text>
              <Text fontWeight="700">{service.outcome}</Text>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>

      <VStack mt={10} spacing={3}>
        <Text textAlign="center" maxW="700px">
          Need a dependable partner to execute your next build from planning to deployment?
        </Text>
        <Button as="a" href="#contact" colorScheme="yellow" background="#ffd700" size="lg">
          Discuss Your Idea
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
