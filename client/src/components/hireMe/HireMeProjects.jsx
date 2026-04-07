import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiArrowLeft, HiArrowRight, HiCheckCircle, HiOutlinePlusSm } from "react-icons/hi";
import HireMeSection from "./HireMeSection";
import { hireMeProjects } from "../../content/hireMeContent";
import { navigateWithinApp } from "../../utils/navigation";

const HireMeProjects = ({
  projects = hireMeProjects.slice(0, 3),
  eyebrow = "Selected Build Work",
  title = "Featured Projects",
  description = "A focused selection of full-stack work that shows architecture thinking, production flows, and debugging depth.",
  showAllLink = true,
  sectionPy,
  sectionSpacing,
  revealOnMount = false,
}) => {
  const [activeCardTitle, setActiveCardTitle] = useState("");
  const allProjectsHref = `${import.meta.env.BASE_URL}dev/projects`;

  return (
    <HireMeSection
      id="projects"
      eyebrow={eyebrow}
      title={title}
      description={description}
      bg="linear-gradient(180deg, rgba(255,255,255,0.74) 0%, rgba(247,249,252,0.92) 100%)"
      py={sectionPy}
      spacing={sectionSpacing}
      revealOnMount={revealOnMount}
    >
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6}>
        {projects.map((project) => {
          const isOpen = activeCardTitle === project.title;

          return (
            <Box
              key={project.title}
              role="group"
              position="relative"
              bg="white"
              borderRadius="8px"
              border="1px solid rgba(211, 218, 228, 0.96)"
              overflow="hidden"
              boxShadow="0 18px 40px rgba(20, 33, 58, 0.06)"
              display="flex"
              flexDirection="column"
              minH="100%"
              transition="transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 24px 44px rgba(20, 33, 58, 0.10)",
                borderColor: "#c7d5ee",
              }}
            >
              <Box overflow="hidden" flexShrink={0}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    h="220px"
                    w="100%"
                    objectFit="cover"
                    transition="transform 0.35s ease"
                    _groupHover={{ transform: "scale(1.03)" }}
                  />
                ) : (
                  <FlexPlaceholder project={project} />
                )}
              </Box>

              <Box position="relative" flex="1" minH={{ base: "auto", md: "420px" }}>
                <VStack align="start" spacing={5} p={{ base: 5, md: 6 }} h="100%">
                  <VStack align="start" spacing={3}>
                    <Heading
                      fontFamily="'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Georgia, serif"
                      fontSize={{ base: "xl", md: "2xl" }}
                      color="#171c27"
                      lineHeight="1.02"
                      fontWeight="600"
                      letterSpacing="-0.04em"
                    >
                      {project.title}
                    </Heading>

                    {project.role ? (
                      <Text fontSize="sm" lineHeight="1.8" color="#445368" fontWeight="600">
                        {project.role}
                      </Text>
                    ) : null}

                    <Text fontSize="sm" lineHeight="1.8" color="#5a677a">
                      {project.summary}
                    </Text>
                  </VStack>

                  <HStack spacing={2} flexWrap="wrap">
                    {project.stack.map((item) => (
                      <Tag
                        key={item}
                        borderRadius="full"
                        px={3}
                        py={1.5}
                        bg="#edf3ff"
                        color="#234aa5"
                        fontWeight="700"
                      >
                        {item}
                      </Tag>
                    ))}
                  </HStack>

                  <List spacing={3}>
                    {project.points.slice(0, 2).map((point) => (
                      <ListItem key={point} fontSize="sm" color="#445368" lineHeight="1.75">
                        <ListIcon as={HiCheckCircle} color="brand.500" mt="-2px" />
                        {point}
                      </ListItem>
                    ))}
                  </List>

                  <HStack
                    w="100%"
                    justify="space-between"
                    align={{ base: "flex-start", sm: "center" }}
                    flexDirection={{ base: "column", sm: "row" }}
                    spacing={{ base: 1, sm: 0 }}
                    pt={1}
                    mt="auto"
                  >
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      px={0}
                      leftIcon={<HiOutlinePlusSm />}
                      color="#506176"
                      aria-expanded={isOpen}
                      aria-controls={`project-notes-${project.title}`}
                      onClick={() =>
                        setActiveCardTitle((current) =>
                          current === project.title ? "" : project.title,
                        )
                      }
                      _hover={{ bg: "transparent", color: "#1f4294" }}
                    >
                      Project Notes
                    </Button>

                    {project.repoUrl ? (
                      <Button
                        as={Link}
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="ghost"
                        color="#1f4294"
                        px={0}
                        rightIcon={<HiArrowRight />}
                        _hover={{ textDecoration: "none", color: "brand.500" }}
                      >
                        View Project
                      </Button>
                    ) : null}
                  </HStack>
                </VStack>

                <Box
                  id={`project-notes-${project.title}`}
                  position="absolute"
                  inset="0"
                  zIndex="2"
                  bg="rgba(255,255,255,0.98)"
                  transform={isOpen ? "translateY(0%)" : "translateY(102%)"}
                  transition="transform 0.32s ease"
                  pointerEvents={isOpen ? "auto" : "none"}
                  display="flex"
                  flexDirection="column"
                >
                  <VStack align="start" spacing={4} p={{ base: 5, md: 6 }} flex="1" overflowY="auto">
                    <HStack
                      w="100%"
                      justify="space-between"
                      align={{ base: "flex-start", sm: "center" }}
                      flexDirection={{ base: "column", sm: "row" }}
                      spacing={{ base: 2, sm: 0 }}
                    >
                      <Text
                        fontSize="0.72rem"
                        textTransform="uppercase"
                        letterSpacing="0.22em"
                        color="brand.500"
                        fontWeight="800"
                      >
                        Project Notes
                      </Text>
                      <Button
                        type="button"
                        variant="ghost"
                        leftIcon={<HiArrowLeft />}
                        px={0}
                        color="#506176"
                        onClick={() => setActiveCardTitle("")}
                        _hover={{ bg: "transparent", color: "#1f4294" }}
                      >
                        Back
                      </Button>
                    </HStack>

                    {project.challenge ? <InfoBlock label="Challenge" value={project.challenge} /> : null}
                    {project.outcome ? <InfoBlock label="Outcome" value={project.outcome} /> : null}
                  </VStack>
                </Box>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>

      {showAllLink ? (
        <HStack justify="center" pt={{ base: 8, md: 10 }}>
          <Button
            as={Link}
            href={allProjectsHref}
            onClick={(event) => {
              event.preventDefault();
              navigateWithinApp(allProjectsHref);
            }}
            bg="white"
            color="#173f95"
            border="1px solid rgba(199, 213, 238, 0.96)"
            rightIcon={<HiArrowRight />}
            _hover={{ textDecoration: "none", bg: "#f8fbff", borderColor: "#bfd0f6" }}
          >
            View All Projects
          </Button>
        </HStack>
      ) : null}
    </HireMeSection>
  );
};

const InfoBlock = ({ label, value }) => (
  <Box
    w="100%"
    p={4}
    borderRadius="14px"
    bg="#f7f9fc"
    border="1px solid rgba(219, 224, 232, 0.92)"
  >
    <Text
      fontSize="0.7rem"
      textTransform="uppercase"
      letterSpacing="0.18em"
      color="brand.500"
      fontWeight="800"
      mb={2}
    >
      {label}
    </Text>
    <Text fontSize="sm" lineHeight="1.8" color="#556173">
      {value}
    </Text>
  </Box>
);

const FlexPlaceholder = ({ project }) => (
  <Stack
    align="stretch"
    justify="space-between"
    h="220px"
    px={6}
    py={5}
    borderRadius="0"
    bg="linear-gradient(135deg, #0d183c 0%, #143171 52%, #1f56c4 100%)"
    color="white"
    spacing={4}
  >
    <HStack spacing={2} justify="space-between" align="start">
      <VStack align="start" spacing={1}>
        <Text
          fontSize="0.68rem"
          textTransform="uppercase"
          letterSpacing="0.22em"
          color="rgba(255,255,255,0.72)"
        >
          {project.stack.slice(0, 2).join(" / ")}
        </Text>
        <Heading fontSize="2xl" lineHeight="1.02">
          {project.title}
        </Heading>
      </VStack>
      <Box
        w="58px"
        h="58px"
        borderRadius="18px"
        bg="rgba(255,255,255,0.10)"
        border="1px solid rgba(255,255,255,0.16)"
      />
    </HStack>

    <VStack align="stretch" spacing={3}>
      <Box
        h="64px"
        borderRadius="16px"
        bg="rgba(255,255,255,0.10)"
        border="1px solid rgba(255,255,255,0.14)"
      />
      <HStack spacing={3}>
        <Box
          flex="1"
          h="42px"
          borderRadius="14px"
          bg="rgba(255,255,255,0.08)"
          border="1px solid rgba(255,255,255,0.12)"
        />
        <Box
          flex="1"
          h="42px"
          borderRadius="14px"
          bg="rgba(255,255,255,0.08)"
          border="1px solid rgba(255,255,255,0.12)"
        />
      </HStack>
    </VStack>
  </Stack>
);

export default HireMeProjects;
