import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Image,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { motion } from "framer-motion";
import Personal_finance_dashboard from "../images/Personal_Finance_Dashboard.jpeg";
import Artisan_Marketplace from "../images/Marketplace.jpeg";
import Ecommerce from "../images/Ecommerce.jpg";
import { useLanguage } from "../context/LanguageContext";

const MotionBox = motion(Box);

const baseProjects = [
  {
    techStack: ["React", "Node", "MongoDB"],
    image: Personal_finance_dashboard,
  },
  {
    techStack: ["PHP", "AWS RDS", "Bootstrap"],
    image: Artisan_Marketplace,
  },
  {
    techStack: ["React", "Node", "MongoDB"],
    image: Ecommerce,
  },
];

const Projects = () => {
  const { t } = useLanguage();

  const localizedItems = t("projects.items");
  const projects = useMemo(
    () => baseProjects.map((item, index) => ({ ...item, ...localizedItems[index] })),
    [localizedItems],
  );

  const bg = useColorModeValue("bg.alt", "bg.surfaceMuted");
  const textColor = useColorModeValue("text.primary", "text.primary");
  const headingColor = useColorModeValue("text.primary", "text.primary");
  const lineColor = useColorModeValue("text.secondary", "text.secondary");
  const subtleColor = useColorModeValue("brand.400", "brand.200");
  const overlayBg = useColorModeValue("rgba(255, 255, 255, 0.96)", "rgba(15, 23, 42, 0.92)");
  const overlayTitle = useColorModeValue("text.primary", "white");

  return (
    <MotionBox
      id="projects"
      py={{ base: 16, md: 20, lg: 24 }}
      px={{ base: 5, md: 10 }}
      bg={bg}
      color={textColor}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box maxW="1840px" mx="auto">
        <VStack align="start" spacing={4} mb={{ base: 10, md: 12 }}>
          <Text
            fontSize="0.68rem"
            textTransform="uppercase"
            letterSpacing="0.28em"
            color={subtleColor}
            fontWeight="600"
          >
            {t("projects.eyebrow")}
          </Text>
          <Heading
            fontFamily="heading"
            fontSize={{ base: "2.6rem", md: "4rem" }}
            lineHeight="0.92"
            letterSpacing="-0.08em"
            color={headingColor}
            maxW="360px"
          >
            {t("projects.heading")}
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={{ base: 8, md: 6, lg: 7 }}>
          {projects.map((project, index) => (
            <MotionBox
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <Box position="relative" mb={5}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width="100%"
                  height={{ base: "240px", md: "280px" }}
                  objectFit="cover"
                  loading="lazy"
                />
                <Box
                  position="absolute"
                  left="14px"
                  bottom="14px"
                  bg={overlayBg}
                  px={4}
                  py={3}
                  maxW="72%"
                  borderRadius="md"
                >
                  <Text fontSize="0.6rem" textTransform="uppercase" letterSpacing="0.22em" color={subtleColor} mb={1}>
                    {project.context}
                  </Text>
                  <Heading fontSize={{ base: "lg", md: "xl" }} lineHeight="1.05" letterSpacing="-0.04em" color={overlayTitle}>
                    {project.title}
                  </Heading>
                </Box>
              </Box>

              <VStack align="start" spacing={3}>
                <Box>
                  <Text fontSize="0.58rem" textTransform="uppercase" letterSpacing="0.22em" color={subtleColor} fontWeight="700" mb={1}>
                    {t("projects.labels.problem")}
                  </Text>
                  <Text fontSize="sm" color={lineColor} lineHeight="1.7">{project.problem}</Text>
                </Box>

                <Box>
                  <Text fontSize="0.58rem" textTransform="uppercase" letterSpacing="0.22em" color={subtleColor} fontWeight="700" mb={1}>
                    {t("projects.labels.built")}
                  </Text>
                  <Text fontSize="sm" color={lineColor} lineHeight="1.7">{project.built}</Text>
                </Box>

                <Box>
                  <Text fontSize="0.58rem" textTransform="uppercase" letterSpacing="0.22em" color={subtleColor} fontWeight="700" mb={1}>
                    {t("projects.labels.outcome")}
                  </Text>
                  <Text fontSize="sm" color={lineColor} lineHeight="1.7">{project.outcome}</Text>
                </Box>

                <HStack spacing={3} pt={1} flexWrap="wrap">
                  {project.techStack.map((tech) => (
                    <Text key={tech} fontSize="0.58rem" textTransform="uppercase" letterSpacing="0.2em" color={subtleColor}>
                      {tech}
                    </Text>
                  ))}
                </HStack>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </MotionBox>
  );
};

export default Projects;
