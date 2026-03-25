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

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const processData = [
  {
    date: "Step 1",
    title: "Understand",
    institution: "Discovery and clarity",
    description: "I gather your goals, constraints, and user needs to define the right solution scope.",
  },
  {
    date: "Step 2",
    title: "Plan",
    institution: "Delivery roadmap",
    description: "We align on timeline, milestones, and architecture so execution stays predictable.",
  },
];

const deliveryData = [
  {
    date: "Step 3",
    title: "Build",
    company: "Implementation",
    description: "I develop in focused iterations with clear progress updates and dependable quality.",
  },
  {
    date: "Step 4",
    title: "Deliver",
    company: "Launch and handoff",
    description: "You receive production-ready software with support for deployment and next steps.",
  },
];

const Resume = () => {
  const bg = useColorModeValue("white", "black");
  const textColor = useColorModeValue("black", "white");
  const headingColor = useColorModeValue("black", "yellow.400");
  const cardBg = useColorModeValue("gray.100", "gray.800");

  return (
    <MotionBox
      id="resume"
      py={20}
      px={{ base: 6, md: 20 }}
      bg={bg}
      color={textColor}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      overflow="hidden"
    >
      <VStack spacing={6} textAlign="center" mb={12}>
        <MotionHeading fontSize="4xl" color={headingColor} initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          How I Work
        </MotionHeading>
        <Text maxW="800px" fontSize="lg">
          A simple 4-step process for reliable project delivery.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} maxW="1200px" mx="auto">
        <VStack align="start" spacing={6}>
          <Heading fontSize="2xl" color={headingColor} display="flex" alignItems="center">
            <FaSearch style={{ marginRight: "8px" }} /> Discovery
          </Heading>
          {processData.map((item, index) => (
            <MotionBox
              key={index}
              p={6}
              bg={cardBg}
              borderRadius="md"
              boxShadow="lg"
              className="resume-card"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Text fontSize="sm" color="gray.400">
                {item.date}
              </Text>
              <Heading fontSize="lg" color={headingColor}>
                {item.title}
              </Heading>
              <Text fontWeight="bold">{item.institution}</Text><br />
              <Text>{item.description}</Text>
            </MotionBox>
          ))}
        </VStack>

        <VStack align="start" spacing={6}>
          <Heading fontSize="2xl" color={headingColor} display="flex" alignItems="center">
            <FaRocket style={{ marginRight: "8px" }} /> Execution
          </Heading>
          {deliveryData.map((item, index) => (
            <MotionBox
              key={index}
              p={6}
              bg={cardBg}
              borderRadius="md"
              boxShadow="lg"
              className="resume-card"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Text fontSize="sm" color="gray.400">
                {item.date}
              </Text>
              <Heading fontSize="lg" color={headingColor}>
                {item.title}
              </Heading>
              <Text fontWeight="bold">{item.company}</Text><br />
              <Text>{item.description}</Text>
            </MotionBox>
          ))}
        </VStack>
      </SimpleGrid>

      <style>
        {`
            .resume-card {
              transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            }
            @media (min-width: 768px) {
              .resume-card:hover {
                transform: scale(1.05);
                box-shadow: 0px 0px 15px var(--accent-color);
              }
            }
          `}
      </style>
    </MotionBox>
  );
};

export default Resume;
