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
    github: "https://github.com/rushabh-rajpara/HappyBox_Php",
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

  const bg = useColorModeValue("bg.canvas", "bg.canvas");
  const textColor = useColorModeValue("text.primary", "text.primary");
  const headingColor = useColorModeValue("text.primary", "text.primary");
  const hoverBg = useColorModeValue("brand.100", "brand.700");
  const cardBg = useColorModeValue("bg.surface", "bg.surface");
  const lineColor = useColorModeValue("text.secondary", "text.secondary");
  const contextColor = useColorModeValue("neutral.500", "neutral.300");
  const cardBorderColor = useColorModeValue("border.soft", "border.soft");

  return (
    <MotionBox
      id="projects"
      py={{ base: 14, md: 20, lg: 24 }}
      px={{ base: 6, md: 20 }}
      bg={bg}
      color={textColor}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <VStack spacing={6} textAlign="center" mb={8}>
        <Heading fontSize={{ base: "3xl", md: "4xl" }} color={headingColor}>{t("projects.heading")}</Heading>
        <Text maxW="740px" fontSize={{ base: "md", md: "lg" }} color={lineColor}>{t("projects.subheading")}</Text>
      </VStack>

      <HStack spacing={4} justify="center" mb={10} flexWrap="wrap">
        {categories.map((category) => (
          <Box
            as="button"
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            fontSize="sm"
            px={3}
            py={1.5}
            borderRadius="full"
            bg={activeCategory === category.id ? hoverBg : "transparent"}
            color={activeCategory === category.id ? "accent.primary" : textColor}
            _hover={{ color: "accent.primary" }}
            transition="0.22s"
            fontWeight="600"
          >
            {category.label}
          </Box>
        ))}
      </HStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 5, md: 6, lg: 8 }} maxW="1200px" mx="auto">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <MotionBox
              key={`${project.title}-${index}`}
              borderRadius="lg"
              overflow="hidden"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              className="project-card"
              bg={cardBg}
              border="1px solid"
              borderColor={cardBorderColor}
              boxShadow="card"
            >
              <Image
                src={project.image}
                alt={project.title}
                width="100%"
                height="200px"
                objectFit="cover"
                loading="lazy"
              />

              <VStack align="start" spacing={3} p={5}>
                <Heading fontSize="lg" color={headingColor}>{project.title}</Heading>
                <Text fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em" color={contextColor}>
                  {project.context}
                </Text>
                <Text fontSize="sm" color={lineColor}><strong>{t("projects.labels.problem")}:</strong> {project.problem}</Text>
                <Text fontSize="sm" color={lineColor}><strong>{t("projects.labels.built")}:</strong> {project.built}</Text>
                <Text fontSize="sm" color={lineColor}><strong>{t("projects.labels.outcome")}:</strong> {project.outcome}</Text>

                <HStack spacing={2} flexWrap="wrap">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} colorScheme="brand" variant="subtle">{tech}</Badge>
                  ))}
                </HStack>

                <HStack mt={2} spacing={4}>
                  <Link href={project.liveDemo || project.github} isExternal fontSize="sm" color="accent.primary" _hover={{ textDecoration: "underline" }}>
                    {t("projects.labels.viewProject")}
                  </Link>
                  {project.liveDemo && (
                    <Link href={project.liveDemo} isExternal fontSize="sm" color="accent.primary" _hover={{ textDecoration: "underline" }}>
                      {t("projects.labels.liveDemo")}
                    </Link>
                  )}
                  <Link href={project.github} isExternal fontSize="sm" color="accent.primary" _hover={{ textDecoration: "underline" }}>
                    {t("projects.labels.github")}
                  </Link>
                </HStack>
              </VStack>
            </MotionBox>
          ))}
        </AnimatePresence>
      </SimpleGrid>

      <VStack mt={10} spacing={3}>
        <Text textAlign="center" maxW="700px" color={lineColor}>{t("projects.ctaText")}</Text>
        <Button as="a" href="#contact" bg="accent.primary" color="white" size="lg" _hover={{ bg: "accent.hover", transform: "translateY(-2px)", boxShadow: "cardHover" }}>
          {t("projects.ctaButton")}
        </Button>
      </VStack>

      <style>
        {`
          .project-card {
            transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
          }
          .project-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--chakra-shadows-cardHover);
            border-color: var(--accent-color);
          }
        `}
      </style>
    </MotionBox>
  );
};

export default Projects;
