import { Box, Container, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <Box as="footer" borderTop="1px solid" borderColor="border.soft" py={8} bg="bg.canvas">
      <Container maxW="1200px">
        <Stack direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "start", md: "center" }} spacing={3}>
          <Stack spacing={0}>
            <Text fontWeight="700" color="text.primary">Rushabh Rajpara</Text>
            <Text fontSize="sm" color="text.secondary">Web Applications, MVPs & Automation</Text>
          </Stack>
          <HStack spacing={4}>
            <Link href="#services" color="text.secondary" _hover={{ color: "accent.primary" }}>{t("nav.services")}</Link>
            <Link href="#projects" color="text.secondary" _hover={{ color: "accent.primary" }}>{t("nav.caseStudies")}</Link>
            <Link href="#contact" color="text.secondary" _hover={{ color: "accent.primary" }}>{t("nav.contact")}</Link>
          </HStack>
          <Text fontSize="sm" color="text.secondary">Copyright {year} Rushabh Rajpara</Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
