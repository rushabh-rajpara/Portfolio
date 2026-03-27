import { Box, Heading, SimpleGrid, Text, VStack, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaComments, FaRegClock, FaCheckCircle, FaLayerGroup } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const trustIcons = [FaComments, FaRegClock, FaCheckCircle, FaLayerGroup];

const TrustSignals = () => {
  const bg = useColorModeValue("white", "black");
  const headingColor = useColorModeValue("black", "yellow.400");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const cardBg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("blackAlpha.200", "whiteAlpha.300");
  const { t } = useLanguage();

  const items = t("trust.items");

  return (
    <Box id="trust" py={{ base: 14, md: 20, lg: 24 }} px={{ base: 6, md: 20 }} bg={bg}>
      <VStack spacing={6} textAlign="center" mb={12}>
        <Heading fontSize={{ base: "3xl", md: "4xl" }} color={headingColor}>{t("trust.heading")}</Heading>
        <Text maxW="700px" fontSize={{ base: "md", md: "lg" }} color={textColor}>{t("trust.subheading")}</Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 5, md: 6, lg: 7 }} maxW="1200px" mx="auto">
        {items.map((item, index) => (
          <VStack
            key={item.title}
            align="start"
            spacing={3}
            p={{ base: 5, md: 6 }}
            bg={cardBg}
            borderRadius="lg"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="card"
            className="trust-card"
          >
            <HStack spacing={3}>
              <Icon as={trustIcons[index]} color={headingColor} boxSize={5} />
              <Text fontWeight="700">{item.title}</Text>
            </HStack>
            <Text color={textColor} fontSize="sm" lineHeight="1.7">{item.description}</Text>
          </VStack>
        ))}
      </SimpleGrid>

      <style>
        {`
          .trust-card {
            transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
          }
          .trust-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--chakra-shadows-cardHover);
            border-color: var(--accent-color);
          }
        `}
      </style>
    </Box>
  );
};

export default TrustSignals;
