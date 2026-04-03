import { Box, Button, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { hireMeNavigation } from "../../content/hireMeContent";

const HireMeNavbar = () => (
  <Box
    as="header"
    position="sticky"
    top="0"
    zIndex="20"
    backdropFilter="blur(18px)"
    bg="rgba(244, 246, 250, 0.82)"
    borderBottom="1px solid rgba(209, 216, 226, 0.72)"
  >
    <Container maxW="1220px" px={{ base: 5, md: 8 }}>
      <Flex minH="80px" align="center" justify="space-between" gap={6}>
        <Text
          fontWeight="800"
          fontSize={{ base: "lg", md: "xl" }}
          color="#171c27"
          letterSpacing="-0.04em"
        >
          Rushabh.dev
        </Text>

        <HStack spacing={7} display={{ base: "none", lg: "flex" }}>
          {hireMeNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              fontSize="sm"
              fontWeight="600"
              color="#4f5c70"
              _hover={{ color: "brand.600", textDecoration: "none" }}
            >
              {item.label}
            </Link>
          ))}
        </HStack>

        <Button
          as="a"
          href="#contact"
          bg="brand.600"
          color="white"
          size="md"
          _hover={{ bg: "brand.500", transform: "translateY(-1px)" }}
        >
          Let&apos;s Connect
        </Button>
      </Flex>
    </Container>
  </Box>
);

export default HireMeNavbar;
