import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box as="section" id="about" py={{ base: 14, md: 20 }} bg="brand.surfaceAlt">
      <Container maxW="1200px">
        <Stack spacing={4} maxW="820px">
          <Heading as="h2" size="xl" color="brand.ink">
            About
          </Heading>
          <Text color="brand.muted" fontSize="lg">
            I help businesses turn ideas into reliable software by combining practical product thinking with dependable engineering execution.
          </Text>
          <Text color="brand.muted">
            I work with agencies, startups, and growing companies to build web products that are maintainable, scalable, and ready for real users.
          </Text>
          <Text color="brand.muted">
            Based in Canada and supported by a skilled development team in India, I deliver clean architecture, clear communication, and consistent outcomes.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
