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
  Button,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Personal_finance_dashboard from "../images/Personal_Finance_Dashboard.jpeg";
import Artisan_Marketplace from "../images/Marketplace.jpeg";
import Ecommerce from "../images/Ecommerce.jpg";
import { useLanguage } from "../context/LanguageContext";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const baseProjects = [
  {
    category: "webapp",
    techStack: ["React", "Node", "MongoDB", "Tailwind"],
    image: Personal_finance_dashboard,
    liveDemo: "",
    github: "https://github.com/rushabh-rajpara/personal-finance-dashboard",
  },
  {
    category: "mvp",
    techStack: ["PHP", "AWS RDS", "Bootstrap", "Amazon S3"],
    image: Artisan_Marketplace,
    liveDemo: "http://172.105.22.192/index.php",
    github: "https://github.com/rushabh-rajpara/Artisan_Marketplace",
  },
  {
    category: "automation",
    techStack: ["React", "Node", "MongoDB", "Tailwind"],
    image: Ecommerce,
    liveDemo: "",
    github: "git@github.com:rushabh-rajpara/HappyBox_Php",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t } = useLanguage();

  const categories = [
    { id: "all", label: t("projects.categories.all") },
    { id: "mvp", label: t("projects.categories.mvp") },
    { id: "webapp", label: t("projects.categories.webapp") },
    { id: "automation", label: t("projects.categories.automation") },
  ];

  const localizedItems = t("projects.items");
  const projects = useMemo(
    () => baseProjects.map((item, index) => ({ ...item, ...localizedItems[index] })),
    [localizedItems],
  );

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const bg = useColorModeValue("white", "black");
  const textColor = useColorModeValue("black", "white");
  const headingColor = useColorModeValue("black", "yellow.400");
  const hoverBg = useColorModeValue("yellow.400", "yellow.500");
  const ctaHover = { transform: "translateY(-2px)", boxShadow: "0 0 16px var(--accent-color)" };

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
        <Heading fontSize="4xl" color={headingColor}>{t("projects.heading")}</Heading>
        <Text maxW="860px">{t("projects.subheading")}</Text>
      </VStack>

      <HStack spacing={4} justify="center" mb={10} flexWrap="wrap">
        {categories.map((category, index) => (
          <Box
            as="button"
            key={index}
            onClick={() => setActiveCategory(category.id)}
            fontSize="sm"
            bg="transparent"
            color={activeCategory === category.id ? "var(--accent-color)" : textColor}
            _hover={{ color: "var(--accent-color)" }}
            transition="0.3s"
            position="relative"
          >
            {category.label}
            {activeCategory === category.id && (
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
              key={`${project.title}-${index}`}
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
                opacity={{ base: 1, md: 0 }}
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
                <Heading fontSize="lg" color="yellow.400" mb={2}>{project.title}</Heading>
                <Text fontSize="xs" color="gray.200" mb={2}><strong>{t("projects.labels.problem")}:</strong> {project.problem}</Text>
                <Text fontSize="xs" color="gray.200" mb={2}><strong>{t("projects.labels.built")}:</strong> {project.built}</Text>
                <Text fontSize="xs" color="gray.200" mb={3}><strong>{t("projects.labels.outcome")}:</strong> {project.outcome}</Text>

                <HStack mb={3} spacing={2} flexWrap="wrap">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} colorScheme="yellow">{tech}</Badge>
                  ))}
                </HStack>

                <HStack mt={2} spacing={4}>
                  {project.liveDemo && (
                    <Link href={project.liveDemo} isExternal fontSize="sm" color="yellow.300" _hover={{ textDecoration: "underline" }}>
                      {t("projects.labels.liveDemo")}
                    </Link>
                  )}
                  <Link href={project.github} isExternal fontSize="sm" color="yellow.300" _hover={{ textDecoration: "underline" }}>
                    {t("projects.labels.github")}
                  </Link>
                </HStack>
              </Flex>
            </MotionBox>
          ))}
        </AnimatePresence>
      </SimpleGrid>

      <VStack mt={10} spacing={3}>
        <Text textAlign="center" maxW="700px">{t("projects.ctaText")}</Text>
        <Button as="a" href="#contact" colorScheme="yellow" background="#ffd700" size="md" _hover={{ ...ctaHover, bg: "#ffd700" }}>
          {t("projects.ctaButton")}
        </Button>
      </VStack>

      <style>
        {`
            .project-card {
              transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            }
            .project-card:hover {
              transform: scale(1.03);
              box-shadow: 0px 0px 15px var(--accent-color);
            }
          `}
      </style>
    </MotionBox>
  );
};

export default Projects;
