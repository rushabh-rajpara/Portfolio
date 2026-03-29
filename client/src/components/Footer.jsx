import { Box, HStack, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const year = new Date().getFullYear();
  const bg = useColorModeValue("#e6ebf3", "#111a2b");
  const borderColor = useColorModeValue("#d5dce6", "rgba(255, 255, 255, 0.08)");
  const muted = useColorModeValue("brand.500", "brand.200");

  return (
    <Box as="footer" bg={bg} py={{ base: 10, md: 14 }} px={{ base: 5, md: 8 }} borderTop="1px solid" borderColor={borderColor}>
      <Stack
        maxW="1840px"
        mx="auto"
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align={{ base: "start", lg: "start" }}
        spacing={{ base: 8, lg: 10 }}
      >
        <Stack spacing={4}>
          <Text
            fontFamily="body"
            fontWeight="800"
            fontSize={{ base: "2xl", md: "3xl" }}
            letterSpacing="-0.04em"
            color="text.primary"
            textTransform="uppercase"
          >
            Rushabh_Rajpara
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} letterSpacing="0.14em" textTransform="uppercase" color={muted}>
            {`Copyright ${year} Rushabh Rajpara. Built with intention.`}
          </Text>
        </Stack>

        <HStack spacing={{ base: 5, md: 8 }} flexWrap="wrap" justify={{ base: "start", lg: "end" }}>
          <Link href="https://github.com/rushabh-rajpara" target="_blank" rel="noopener noreferrer" fontSize={{ base: "sm", md: "md" }} letterSpacing="0.14em" textTransform="uppercase" color={muted} _hover={{ color: "accent.primary", textDecoration: "none" }}>
            GitHub
          </Link>
          <Link href="#projects" fontSize={{ base: "sm", md: "md" }} letterSpacing="0.14em" textTransform="uppercase" color={muted} _hover={{ color: "accent.primary", textDecoration: "none" }}>
            Work
          </Link>
          <Link href="#services" fontSize={{ base: "sm", md: "md" }} letterSpacing="0.14em" textTransform="uppercase" color={muted} _hover={{ color: "accent.primary", textDecoration: "none" }}>
            Services
          </Link>
          <Link href="mailto:rushabh4478@gmail.com" fontSize={{ base: "sm", md: "md" }} letterSpacing="0.14em" textTransform="uppercase" color={muted} _hover={{ color: "accent.primary", textDecoration: "none" }}>
            Email
          </Link>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
