import { useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Image,
  VStack,
  Link,
  Button,
  HStack,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import Personal_finance_dashboard from "../images/personal_finance_dashboard.jpeg";
import Artisan_Marketplace from "../images/Marketplace.jpeg";
import E_learning from "../images/E-Learning.webp";
import Ecommerce from "../images/Ecommerce.jpg";
import UI_UX from "../images/UI_UX.jpeg";

// Motion Components for Animations
const MotionBox = motion(Box);
const MotionImage = motion(Image);

// Project Categories
const categories = ["All", "Web Design", "Web Application", "UI/UX"];

// Projects Data
const projects = [
  {
    title: "Personal Finance Dashboard",
    category: "Web Application",
    description: "A comprehensive dashboard designed for managing personal finances, featuring real-time updates, dynamic budget management, and advanced visualizations.",
    techStack: ["React", "Node", "Tailwind", "MongoDB", "GSAP", "Locomotive Scroll"],
    image: Personal_finance_dashboard,
    liveDemo: "",
    github: "https://github.com/yourrepo",
  },
  {
    title: "Artisan Marketplace",
    category: "Web Application",
    description: "An online platform for artisans to showcase and sell products. Features include product approval workflows, search optimization, analytics dashboard, and integrated notifications system.",
    techStack: ["PHP", "AWS RDS", "Bootstrap", "Amazon S3"],
    image: Artisan_Marketplace,
    liveDemo: "http://172.105.22.192/index.php",
    github: "https://github.com/yourrepo",
  },
  {
    title: "Online Learning Platform",
    category: "Web Design",
    description: "An interactive e-learning platform offering courses, quizzes, and certifications. Highlights include modern UI/UX, engaging animations, and seamless scrolling experience.",
    techStack: ["React", "Node", "MongoDB", "Tailwind", "GSAP"],
    image:E_learning,
    liveDemo: "",
    github: "https://github.com/yourrepo",
  },
  {
    title: "E-commerce Application",
    category: "Web Application",
    description: "A feature-rich e-commerce platform offering advanced search, secure transactions, and an optimized shopping experience.",
    techStack: ["React", "Node", "MongoDB", "Tailwind"],
    image: Ecommerce,
    liveDemo: "",
    github: "https://github.com/yourrepo",
  },
  {
    title: "UI/UX Redesign",
    category: "UI/UX",
    description: "Revamping user experience for modern applications with improved design, animations, and accessibility.",
    techStack: ["Figma", "Adobe XD", "GSAP", "Tailwind"],
    image: UI_UX,
    liveDemo: "",
    github: "https://github.com/yourrepo",
  },
];


const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Dark & Light Mode Styles
  const bg = useColorModeValue("white", "black");
  const textColor = useColorModeValue("black", "white");
  const headingColor = useColorModeValue("black", "yellow.400");
  const hoverBg = useColorModeValue("yellow.400", "yellow.500");

  return (
    <>
      <Helmet>
        <title>Rushabh Rajpara - Projects</title>
        <meta name="description" content="Browse through some of the projects by Rushabh Rajpara. Click on a category to filter." />
        <meta name="keywords" content="Rushabh Rajpara, Projects, Web Design, Branding, UI/UX, Portfolio" />
        <meta name="author" content="Rushabh Rajpara" />
      </Helmet>
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
        {/* Section Heading */}
        <VStack spacing={6} textAlign="center" mb={8}>
          <Heading fontSize="4xl" color={headingColor}>
            My Projects
          </Heading>
          <Text maxW="800px">
            Browse through some of my work. Click on a category to filter.
          </Text>
        </VStack>

        {/* Filter Tabs */}
        <HStack spacing={4} justify="center" mb={10}>
          {categories.map((category, index) => (
            <Button
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
            </Button>
          ))}
        </HStack>

        {/* Projects Grid */}
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
                {/* Project Image */}
                <MotionImage
                  src={project.image}
                  alt={project.title}
                  borderRadius="md"
                  width="100%"
                  height="250px"
                  objectFit="cover"
                  transition="0.3s"
                  loading="lazy" // Lazy loading images for performance
                />

                {/* Overlay Details */}
                <Flex
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  bg="rgba(0, 0, 0, 0.7)"
                  opacity="0"
                  transition="opacity 0.3s ease"
                  _hover={{ opacity: 1 }}
                  justify="center"
                  align="center"
                  flexDirection="column"
                  textAlign="center"
                  borderRadius="md"
                  className="overlay"
                >
                  <Heading fontSize="lg" color="yellow.400">
                    {project.title}
                  </Heading>
                  <Text fontSize="sm" maxW="80%" color="white">
                    {project.description}
                  </Text>

                  <HStack mt={3} spacing={4}>
  {project.liveDemo && (
    <Link 
      href={project.liveDemo} 
      isExternal 
      fontSize="sm" 
      color="yellow.400" 
      _hover={{ textDecoration: "underline" }}
    >
      Live Demo →
    </Link>
  )}
  <Link 
    href={project.github} 
    isExternal 
    fontSize="sm" 
    color="yellow.400" 
    _hover={{ textDecoration: "underline" }}
  >
    GitHub →
  </Link>
</HStack>

                </Flex>
              </MotionBox>
            ))}
          </AnimatePresence>
        </SimpleGrid>

        {/* CSS for Hover Effects */}
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
    </>
  );
};

export default Projects;
