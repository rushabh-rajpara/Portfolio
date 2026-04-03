import { Box, Container, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { hireMeTechGroups } from "../../content/hireMeContent";

const MotionBox = motion(Box);

const iconMap = {
  Frontend: "\u00ab",
  Backend: "\u2699",
  Database: "\u25cb",
  "Tools & Deployment": "\u25a3",
};

const HireMeTechStack = () => {
  const [activeGroupTitle, setActiveGroupTitle] = useState(hireMeTechGroups[0].title);
  const [activeItemName, setActiveItemName] = useState(hireMeTechGroups[0].items[0].name);

  const activeGroup = useMemo(
    () => hireMeTechGroups.find((group) => group.title === activeGroupTitle) ?? hireMeTechGroups[0],
    [activeGroupTitle],
  );

  const activeItem = useMemo(
    () =>
      activeGroup.items.find((item) => item.name === activeItemName) ?? activeGroup.items[0],
    [activeGroup, activeItemName],
  );

  return (
    <MotionBox
      as="section"
      id="tech-stack"
      py={{ base: 20, md: 24, lg: 28 }}
      bg="linear-gradient(180deg, rgba(246,248,252,0.62) 0%, rgba(255,255,255,0.9) 100%)"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <Container maxW="1340px" px={{ base: 5, md: 7 }}>
        <VStack align="stretch" spacing={{ base: 8, md: 10 }}>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 6, md: 8, lg: 10 }}
            alignItems="start"
          >
            <VStack align="start" spacing={4} maxW="620px" justifySelf="start">
              <Text
                fontFamily="'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Georgia, serif"
                fontSize={{ base: "2.2rem", md: "3rem" }}
                lineHeight="0.98"
                letterSpacing="-0.04em"
                color="#171c27"
                fontWeight="500"
              >
                Tech Stack
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.8" color="#556173">
                A curated selection of tools and languages I use to build resilient products, reliable
                APIs, and scalable application flows.
              </Text>
            </VStack>

            <MotionBox
              key={`${activeGroup.title}-${activeItem.name}`}
              w="100%"
              maxW="360px"
              justifySelf={{ base: "stretch", lg: "end" }}
              bg="white"
              border="1px solid rgba(211, 218, 228, 0.96)"
              borderRadius="16px"
              p={4}
              boxShadow="0 14px 28px rgba(20, 33, 58, 0.05)"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <VStack align="start" spacing={2}>
                <Text
                  fontSize="0.68rem"
                  textTransform="uppercase"
                  letterSpacing="0.18em"
                  color="brand.500"
                  fontWeight="800"
                >
                  Focus
                </Text>
                <Text fontSize="md" fontWeight="800" color="#171c27">
                  {activeItem.name}
                </Text>
                <Text fontSize="xs" fontWeight="700" color="#4d5b70" textTransform="uppercase" letterSpacing="0.12em">
                  {activeGroup.title}
                </Text>
                <Text fontSize="sm" lineHeight="1.7" color="#556173" noOfLines={3}>
                  {activeItem.detail}
                </Text>
              </VStack>
            </MotionBox>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={{ base: 5, xl: 6 }}>
            {hireMeTechGroups.map((group) => {
              const isActiveGroup = group.title === activeGroup.title;

              return (
                <MotionBox
                  key={group.title}
                  p={4}
                  borderRadius="16px"
                  bg={isActiveGroup ? "white" : "rgba(255,255,255,0.42)"}
                  border="1px solid"
                  borderColor={isActiveGroup ? "#c8d7f0" : "rgba(214, 220, 230, 0.86)"}
                  boxShadow={isActiveGroup ? "0 14px 28px rgba(20, 33, 58, 0.06)" : "none"}
                  opacity={isActiveGroup ? 1 : 0.68}
                  animate={{
                    y: isActiveGroup ? -3 : 0,
                    scale: isActiveGroup ? 1.01 : 1,
                  }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  onMouseEnter={() => {
                    setActiveGroupTitle(group.title);
                    setActiveItemName(group.items[0].name);
                  }}
                >
                  <VStack align="start" spacing={4}>
                    <HStack spacing={2}>
                      <Text fontSize="sm" fontWeight="800" color="brand.600" letterSpacing="-0.02em">
                        {iconMap[group.title]} {group.title}
                      </Text>
                    </HStack>

                    <HStack spacing={2} flexWrap="wrap" w="100%">
                      {group.items.map((item) => {
                        const isActiveItem = isActiveGroup && item.name === activeItem.name;

                        return (
                          <Box
                            key={item.name}
                            as="button"
                            type="button"
                            px={3}
                            py={2}
                            borderRadius="full"
                            bg={isActiveItem ? "#e9f0ff" : "#f7f9fc"}
                            border="1px solid"
                            borderColor={isActiveItem ? "#bfd0f6" : "rgba(219, 224, 232, 0.96)"}
                            color={isActiveItem ? "#173f95" : "#4f5c70"}
                            fontSize="sm"
                            fontWeight="700"
                            lineHeight="1.2"
                            transition="all 0.22s ease"
                            onMouseEnter={() => {
                              setActiveGroupTitle(group.title);
                              setActiveItemName(item.name);
                            }}
                            onFocus={() => {
                              setActiveGroupTitle(group.title);
                              setActiveItemName(item.name);
                            }}
                            onClick={() => {
                              setActiveGroupTitle(group.title);
                              setActiveItemName(item.name);
                            }}
                          >
                            {item.name}
                          </Box>
                        );
                      })}
                    </HStack>
                  </VStack>
                </MotionBox>
              );
            })}
          </SimpleGrid>
        </VStack>
      </Container>
    </MotionBox>
  );
};

export default HireMeTechStack;
