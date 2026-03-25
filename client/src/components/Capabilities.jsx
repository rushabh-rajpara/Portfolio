import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { capabilities } from "../content/siteContent";

const Capabilities = () => {
  return (
    <Box as="section" id="capabilities" py={{ base: 14, md: 20 }}>
      <Container maxW="1200px">
        <Heading as="h2" size="xl" color="brand.ink" mb={3}>
          Capabilities
        </Heading>
        <Text color="brand.muted" mb={8} maxW="760px">
          Focused, high-value delivery across product development and execution support.
        </Text>

        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
          {capabilities.map((item) => (
            <Box
              key={item.label}
              border="1px solid"
              borderColor="brand.border"
              borderRadius="lg"
              py={4}
              px={5}
              fontWeight="600"
              color="brand.ink"
              bg="white"
            >
              {item.label}
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Capabilities;
