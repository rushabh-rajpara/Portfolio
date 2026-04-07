import { Box, Button, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { hireMeNavigation } from "../../content/hireMeContent";
import { navigateWithinApp } from "../../utils/navigation";

const HireMeNavbar = ({ isProjectsPage = false }) => {
  const devPath = `${import.meta.env.BASE_URL}dev`;
  const brandHref = isProjectsPage ? `${devPath}#top` : "#top";
  const contactHref = isProjectsPage ? `${devPath}#contact` : "#contact";
  const navItems = hireMeNavigation.map((item) => ({
    ...item,
    href: isProjectsPage ? `${devPath}${item.href}` : item.href,
  }));

  return (
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
          <Link
            href={brandHref}
            onClick={isProjectsPage ? (event) => {
              event.preventDefault();
              navigateWithinApp(brandHref);
            } : undefined}
            _hover={{ textDecoration: "none" }}
            _focusVisible={{ boxShadow: "none" }}
          >
            <Text
              fontWeight="800"
              fontSize={{ base: "lg", md: "xl" }}
              color="#171c27"
              letterSpacing="-0.04em"
            >
              Rushabh.dev
            </Text>
          </Link>

          <HStack spacing={7} display={{ base: "none", lg: "flex" }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={isProjectsPage ? (event) => {
                  event.preventDefault();
                  navigateWithinApp(item.href);
                } : undefined}
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
            href={contactHref}
            onClick={isProjectsPage ? (event) => {
              event.preventDefault();
              navigateWithinApp(contactHref);
            } : undefined}
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
};

export default HireMeNavbar;
