import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { navigationLinks } from "../content/siteContent";

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const renderLinks = (onNavigate) =>
    navigationLinks.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={onNavigate}
        fontSize="sm"
        fontWeight="600"
        color="brand.ink"
        _hover={{ color: "brand.primary", textDecoration: "none" }}
      >
        {item.label}
      </Link>
    ));

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="1000"
      borderBottom="1px solid"
      borderColor="brand.border"
      bg="rgba(247, 248, 250, 0.95)"
      backdropFilter="saturate(180%) blur(10px)"
    >
      <Container maxW="1200px" py={4}>
        <Flex align="center" justify="space-between" gap={4}>
          <Link
            href="#home"
            fontSize="lg"
            fontWeight="700"
            color="brand.ink"
            _hover={{ textDecoration: "none" }}
          >
            Rushabh Rajpara
          </Link>

          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {renderLinks()}
          </HStack>

          <Button
            as="a"
            href="#contact"
            size="sm"
            colorScheme="blue"
            bg="brand.primary"
            _hover={{ bg: "brand.primaryHover" }}
            display={{ base: "none", md: "inline-flex" }}
          >
            Start a Project
          </Button>

          <IconButton
            aria-label="Toggle navigation"
            icon={isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon boxSize={5} />}
            onClick={onToggle}
            display={{ base: "inline-flex", md: "none" }}
            variant="outline"
          />
        </Flex>

        {isOpen && (
          <Stack
            spacing={4}
            mt={4}
            pb={2}
            display={{ base: "flex", md: "none" }}
            borderTop="1px solid"
            borderColor="brand.border"
            pt={4}
          >
            {renderLinks(onClose)}
            <Button
              as="a"
              href="#contact"
              onClick={onClose}
              size="sm"
              colorScheme="blue"
              bg="brand.primary"
              _hover={{ bg: "brand.primaryHover" }}
              w="fit-content"
            >
              Start a Project
            </Button>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
