import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { caseStudies } from "../content/siteContent";

const Projects = () => {
  return (
    <Box as="section" id="case-studies" py={{ base: 14, md: 20 }} bg="brand.surfaceAlt">
      <Container maxW="1200px">
        <Stack spacing={3} mb={10} maxW="760px">
          <Heading as="h2" size="xl" color="brand.ink">
            Case Studies
          </Heading>
          <Text color="brand.muted">
            Selected projects framed around the business problem, solution, and delivery outcome.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6}>
          {caseStudies.map((study) => (
            <Box
              key={study.name}
              border="1px solid"
              borderColor="brand.border"
              borderRadius="xl"
              overflow="hidden"
              bg="white"
            >
              <Image src={study.image} alt={study.name} h="190px" w="100%" objectFit="cover" loading="lazy" />
              <Stack spacing={4} p={6}>
                <Heading as="h3" size="md" color="brand.ink">
                  {study.name}
                </Heading>
                <Text fontSize="sm" color="brand.muted">
                  <strong>Client Problem:</strong> {study.clientProblem}
                </Text>
                <Text fontSize="sm" color="brand.muted">
                  <strong>What I Built:</strong> {study.solution}
                </Text>
                <Text fontSize="sm" color="brand.muted">
                  <strong>Outcome:</strong> {study.outcome}
                </Text>

                <HStack spacing={2} flexWrap="wrap">
                  {study.techStack.map((tech) => (
                    <Badge key={tech} colorScheme="blue" variant="subtle" borderRadius="full" px={3} py={1}>
                      {tech}
                    </Badge>
                  ))}
                </HStack>

                <HStack spacing={3}>
                  {study.liveUrl && (
                    <Button as="a" href={study.liveUrl} target="_blank" rel="noopener noreferrer" size="sm" variant="outline">
                      Live Demo
                    </Button>
                  )}
                  {study.repoUrl && (
                    <Button as="a" href={study.repoUrl} target="_blank" rel="noopener noreferrer" size="sm" variant="ghost">
                      GitHub
                    </Button>
                  )}
                </HStack>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Projects;
