import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Image,
  VStack,
  Link,
  HStack,
  useColorModeValue,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Personal_finance_dashboard from "../images/Personal_Finance_Dashboard.jpeg";
import Artisan_Marketplace from "../images/Marketplace.jpeg";
import Ecommerce from "../images/Ecommerce.jpg";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const categories = ["All", "MVP", "Web Application", "Automation"];

const projects = [
  {
    title: "Finance Operations Dashboard",
    category: "Web Application",
    clientProblem: "A business team needed better visibility into budgets and financial activity.",
    built: "Built a centralized web dashboard for budget tracking, reporting, and account-level insights.",
    outcome: "Improved decision confidence and made recurring reporting workflows more reliable.",
    techStack: ["React", "Node", "MongoDB", "Tailwind"],
    image: Personal_finance_dashboard,
    liveDemo: "",
    github: "https://github.com/rushabh-rajpara/personal-finance-dashboard",
  },
  {
    title: "Artisan Marketplace Platform",
    category: "MVP",
    clientProblem: "An artisan-focused business needed a functional marketplace with admin control.",
    built: "Delivered marketplace workflows for product approvals, listing management, and search.",
    outcome: "Streamlined product publishing and improved the buyer journey across the platform.",
    techStack: ["PHP", "AWS RDS", "Bootstrap", "Amazon S3"],
    image: Artisan_Marketplace,
    liveDemo: "http://172.105.22.192/index.php",
    github: "https://github.com/rushabh-rajpara/Artisan_Marketplace",
  },
  {
    title: "E-commerce Experience Rebuild",
    category: "Automation",
    clientProblem: "A commerce team needed a cleaner, more reliable purchase flow and backend support.",
    built: "Reworked web application flows and connected backend services for a stronger delivery baseline.",
    outcome: "Reduced operational friction and created a more dependable foundation for scaling.",
    techStack: ["React", "Node", "MongoDB", "Tailwind"],
    image: Ecommerce,
    liveDemo: "",
    github: "git@github.com:rushabh-rajpara/HappyBox_Php",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const bg = useColorModeValue("white", "black");
  const textColor = useColorModeValue("black", "white");
  const headingColor = useColorModeValue("black", "yellow.400");
  const hoverBg = useColorModeValue("yellow.400", "yellow.500");

  return (
    <MotionBox
      id="projects"
      py={20}
      px={{ base: 6, md: 20 }}
      bg={bg}
      color={textColor}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <VStack spacing={6} textAlign="center" mb={8}>
        <Heading fontSize="4xl" color={headingColor}>
          Case Studies
        </Heading>
        <Text maxW="800px">
          Real delivery examples focused on client problems, the solution built, and business outcomes.
        </Text>
      </VStack>

      <HStack spacing={4} justify="center" mb={10}>
        {categories.map((category, index) => (
          <Box
            as="button"
            key={index}
            onClick={() => setActiveCategory(category)}
            fontSize="sm"
            bg="transparent"
            color={activeCategory === category ? "var(--accent-color)" : textColor}
            _hover={{ color: "var(--accent-color)" }}
            transition="0.3s"
            position="relative"
          >
            {category}
            {activeCategory === category && (
              <Box
                position="absolute"
                bottom="-5px"
                left="0"
                width="100%"
                height="3px"
                bg={hoverBg}
                transition="width 0.3s ease"
              />
            )}
          </Box>
        ))}
      </HStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} maxW="1200px" mx="auto">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <MotionBox
              key={index}
              position="relative"
              borderRadius="lg"
              overflow="hidden"
              transition="0.3s"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="project-card"
            >
              <MotionImage
                src={project.image}
                alt={project.title}
                borderRadius="md"
                width="100%"
                height="300px"
                objectFit="cover"
                transition="0.3s"
                loading="lazy"
              />

              <Flex
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg="rgba(0, 0, 0, 0.78)"
                opacity="0"
                transition="opacity 0.3s ease"
                _hover={{ opacity: 1 }}
                justify="center"
                align="center"
                flexDirection="column"
                textAlign="left"
                p={5}
                borderRadius="md"
                className="overlay"
              >
                <Heading fontSize="lg" color="yellow.400" mb={2}>
                  {project.title}
                </Heading>
                <Text fontSize="xs" color="gray.200" mb={2}><strong>Client/Problem:</strong> {project.clientProblem}</Text>
                <Text fontSize="xs" color="gray.200" mb={2}><strong>Built:</strong> {project.built}</Text>
                <Text fontSize="xs" color="gray.200" mb={3}><strong>Outcome:</strong> {project.outcome}</Text>

                <HStack mb={3} spacing={2} flexWrap="wrap">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} colorScheme="yellow">{tech}</Badge>
                  ))}
                </HStack>

                <HStack mt={2} spacing={4}>
                  {project.liveDemo && (
                    <Link href={project.liveDemo} isExternal fontSize="sm" color="yellow.300" _hover={{ textDecoration: "underline" }}>
                      Live Demo -&gt;
                    </Link>
                  )}
                  <Link href={project.github} isExternal fontSize="sm" color="yellow.300" _hover={{ textDecoration: "underline" }}>
                    GitHub -&gt;
                  </Link>
                </HStack>
              </Flex>
            </MotionBox>
          ))}
        </AnimatePresence>
      </SimpleGrid>

      <style>
        {`
            .project-card {
              transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            }
            .project-card:hover {
              transform: scale(1.05);
              box-shadow: 0px 0px 15px var(--accent-color);
            }
          `}
      </style>
    </MotionBox>
  );
};

export default Projects;
