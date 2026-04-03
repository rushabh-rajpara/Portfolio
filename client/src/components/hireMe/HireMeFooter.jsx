import { Box, Container, HStack, Link, Text } from "@chakra-ui/react";
import { hireMeFooter } from "../../content/hireMeContent";

const HireMeFooter = () => (
  <Box
    as="footer"
    py={8}
    borderTop="1px solid rgba(209, 216, 226, 0.8)"
    bg="linear-gradient(180deg, rgba(244,247,251,0.94) 0%, rgba(238,242,247,0.98) 100%)"
  >
    <Container
      maxW="1220px"
      px={{ base: 5, md: 8 }}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="space-between"
      gap={4}
    >
      <Box>
        <Text fontWeight="800" color="#171c27">
          {hireMeFooter.name}
        </Text>
        <Text color="#69758a">{hireMeFooter.role}</Text>
      </Box>
      <HStack spacing={5} flexWrap="wrap">
        {hireMeFooter.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            color="#4f5c70"
            fontWeight="700"
            _hover={{ color: "brand.600", textDecoration: "none" }}
          >
            {link.label}
          </Link>
        ))}
      </HStack>
    </Container>
  </Box>
);

export default HireMeFooter;
