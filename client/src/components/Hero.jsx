import { Box, Button, Container, Heading, HStack, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box as="section" id="home" pt={{ base: 20, md: 28 }} pb={{ base: 16, md: 24 }}>
      <Container maxW="1200px">
        <Stack spacing={6} maxW="840px">
          <Text
            as="p"
            fontSize="sm"
            fontWeight="700"
            textTransform="uppercase"
            letterSpacing="0.08em"
            color="brand.primary"
          >
            Web Development Partner
          </Text>
          <Heading as="h1" size="2xl" color="brand.ink" lineHeight="1.15">
            I build web applications, MVPs, and automation systems for businesses and agencies.
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="brand.muted" maxW="760px">
            Fast, reliable development from idea to deployment. I help teams ship practical software with clear execution and dependable delivery.
          </Text>
          <HStack spacing={4} flexWrap="wrap">
            <Button
              as="a"
              href="#contact"
              size="lg"
              bg="brand.primary"
              color="white"
              _hover={{ bg: "brand.primaryHover" }}
            >
              Start a Project
            </Button>
            <Button as="a" href="#case-studies" size="lg" variant="outline" borderColor="brand.borderStrong">
              View Case Studies
            </Button>
          </HStack>
          <Text fontSize="sm" color="brand.muted">
            Based in Canada, working globally with a skilled development team.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
