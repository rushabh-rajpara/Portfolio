import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { processSteps } from "../content/siteContent";

const HowIWork = () => {
  return (
    <Box as="section" id="how-i-work" py={{ base: 14, md: 20 }}>
      <Container maxW="1200px">
        <Stack spacing={3} mb={10} maxW="760px">
          <Heading as="h2" size="xl" color="brand.ink">
            How I Work
          </Heading>
          <Text color="brand.muted">
            A straightforward process designed for clarity, speed, and delivery confidence.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
          {processSteps.map((step, index) => (
            <Box key={step.title} p={5} border="1px solid" borderColor="brand.border" borderRadius="xl" bg="white">
              <Text fontSize="sm" fontWeight="700" color="brand.primary" mb={2}>
                Step {index + 1}
              </Text>
              <Heading as="h3" size="sm" color="brand.ink" mb={2}>
                {step.title}
              </Heading>
              <Text fontSize="sm" color="brand.muted">
                {step.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default HowIWork;
