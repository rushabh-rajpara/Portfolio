import { Container, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { hireMePhilosophy } from "../../content/hireMeContent";
import PhilosophyIntentPanel from "./PhilosophyIntentPanel";

const principleIcons = ["[]", "<>"];
const MotionBox = motion(VStack);

const HireMePhilosophy = () => {
  const [activePrincipleTitle, setActivePrincipleTitle] = useState(
    hireMePhilosophy.principles[0].title,
  );

  return (
    <motion.section
      id="philosophy"
      style={{ background: "#eef2f7" }}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <Container maxW="1340px" px={{ base: 5, md: 7 }} py={{ base: 18, md: 20, lg: 24 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 10, lg: 12 }} alignItems="center">
          <PhilosophyIntentPanel config={hireMePhilosophy.intentPanel} />

          <MotionBox align="start" spacing={{ base: 5, md: 6 }} h="100%" justify="center">
            <Text
              fontSize="0.74rem"
              textTransform="uppercase"
              letterSpacing="0.24em"
              fontWeight="800"
              color="brand.500"
            >
              {hireMePhilosophy.eyebrow}
            </Text>

            <Text
              fontFamily="'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Georgia, serif"
              fontSize={{ base: "2.5rem", md: "3.6rem", xl: "4.1rem" }}
              lineHeight="0.92"
              letterSpacing="-0.05em"
              color="#161b25"
              fontWeight="500"
              maxW="12ch"
            >
              {hireMePhilosophy.title}
            </Text>

            <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.85" color="#445368" maxW="34ch">
              {hireMePhilosophy.description}
            </Text>

            <VStack align="stretch" spacing={3} pt={1} w="100%">
              {hireMePhilosophy.principles.map((item, index) => (
                <HStack
                  key={item.title}
                  as="button"
                  type="button"
                  align="start"
                  spacing={4}
                  bg={activePrincipleTitle === item.title ? "white" : "rgba(255,255,255,0.68)"}
                  border="1px solid"
                  borderColor={activePrincipleTitle === item.title ? "#c8d7f0" : "rgba(211, 218, 228, 0.96)"}
                  borderRadius="16px"
                  p={4}
                  w="100%"
                  textAlign="left"
                  boxShadow={activePrincipleTitle === item.title ? "0 14px 28px rgba(20, 33, 58, 0.08)" : "none"}
                  transform={activePrincipleTitle === item.title ? "translateY(-2px)" : "translateY(0)"}
                  transition="all 0.22s ease"
                  onMouseEnter={() => setActivePrincipleTitle(item.title)}
                  onFocus={() => setActivePrincipleTitle(item.title)}
                  onClick={() => setActivePrincipleTitle(item.title)}
                >
                  <HStack
                    minW="34px"
                    h="34px"
                    align="center"
                    justify="center"
                    borderRadius="10px"
                    bg={activePrincipleTitle === item.title ? "#e7f0ff" : "#eef2f7"}
                    color="brand.600"
                    fontWeight="800"
                    fontSize="sm"
                  >
                    {principleIcons[index]}
                  </HStack>
                  <VStack align="start" spacing={1} flex="1">
                    <Text fontSize="md" fontWeight="800" color="#171c27">
                      {item.title}
                    </Text>
                    <Text fontSize="sm" lineHeight="1.7" color="#556173">
                      {item.text}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </motion.section>
  );
};

export default HireMePhilosophy;
