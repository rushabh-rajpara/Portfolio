import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { services } from "../content/siteContent";

const Services = () => {
  return (
    <Box as="section" id="services" py={{ base: 14, md: 20 }}>
      <Container maxW="1200px">
        <Stack spacing={3} mb={10} maxW="720px">
          <Heading as="h2" size="xl" color="brand.ink">
            Services
          </Heading>
          <Text color="brand.muted">
            Flexible delivery for agencies, small businesses, and product teams that need reliable build support.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {services.map((service) => (
            <Box
              key={service.title}
              p={6}
              border="1px solid"
              borderColor="brand.border"
              borderRadius="xl"
              bg="white"
              transition="transform 0.2s ease, box-shadow 0.2s ease"
              _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
            >
              <Stack spacing={3}>
                <Heading as="h3" size="md" color="brand.ink">
                  {service.title}
                </Heading>
                <Text color="brand.ink">{service.summary}</Text>
                <Text fontWeight="600" color="brand.primary">
                  {service.outcome}
                </Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Services;
