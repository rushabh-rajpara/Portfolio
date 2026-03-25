import { Box, Container, HStack, Link, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box as="footer" borderTop="1px solid" borderColor="brand.border" py={8}>
      <Container maxW="1200px">
        <Stack direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "start", md: "center" }} spacing={3}>
          <Stack spacing={0}>
            <Text fontWeight="700" color="brand.ink">Rushabh Rajpara</Text>
            <Text fontSize="sm" color="brand.muted">Web Applications, MVPs & Automation</Text>
          </Stack>
          <HStack spacing={4}>
            <Link href="#services">Services</Link>
            <Link href="#case-studies">Case Studies</Link>
            <Link href="#contact">Contact</Link>
          </HStack>
          <Text fontSize="sm" color="brand.muted">Copyright {year} Rushabh Rajpara</Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
