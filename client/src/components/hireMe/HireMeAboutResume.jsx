import {
  Box,
  Button,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiArrowRight, HiCheckCircle, HiX } from "react-icons/hi";
import HireMeSection from "./HireMeSection";
import { hireMeAbout, hireMeAboutBlocks, hireMeResume } from "../../content/hireMeContent";

const MotionBox = motion(Box);

const HireMeAboutResume = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <HireMeSection
        id="about"
        eyebrow="Profile"
        title="About"
        bg="linear-gradient(180deg, rgba(240, 244, 250, 0.9) 0%, rgba(247, 249, 252, 0.55) 100%)"
        py={{ base: 14, md: 16, lg: 18 }}
        spacing={{ base: 7, md: 8 }}
      >
        <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={6}>
          <Box bg="white" borderRadius="24px" border="1px solid rgba(211, 218, 228, 0.96)" p={{ base: 5, md: 6 }} boxShadow="0 16px 36px rgba(20, 33, 58, 0.06)">
            <VStack align="start" spacing={3}>
              {hireMeAbout.map((paragraph) => (
                <Text key={paragraph} fontSize={{ base: "md", md: "lg" }} lineHeight="1.68" color="#445368">
                  {paragraph}
                </Text>
              ))}

              {hireMeAboutBlocks.map((block) => (
                <VStack key={block.title} align="start" spacing={1.5} pt={1}>
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="700" color="#171c27">
                    {block.title}
                  </Text>
                  <List spacing={1.5}>
                    {block.items.map((item) => (
                      <ListItem key={item} fontSize={{ base: "sm", md: "md" }} lineHeight="1.6" color="#445368">
                        <ListIcon as={HiCheckCircle} color="brand.500" mt="-2px" />
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </VStack>
              ))}
            </VStack>
          </Box>

          <Box id="resume" bg="linear-gradient(160deg, #0f1d46 0%, #16337f 100%)" color="white" borderRadius="28px" p={{ base: 5, md: 6 }} boxShadow="0 24px 48px rgba(18, 38, 86, 0.22)">
            <VStack align="start" spacing={3}>
              <Text fontSize="0.72rem" textTransform="uppercase" letterSpacing="0.24em" fontWeight="800" color="rgba(255,255,255,0.74)">
                Resume
              </Text>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                lineHeight="1.38"
                fontWeight="600"
                whiteSpace="pre-line"
              >
                {hireMeResume.description}
              </Text>
              <List spacing={2}>
                {hireMeResume.highlights.map((highlight) => (
                  <ListItem key={highlight} color="rgba(255,255,255,0.86)">
                    <ListIcon as={HiCheckCircle} color="#8cb4ff" />
                    {highlight}
                  </ListItem>
                ))}
              </List>
              <HStack pt={2} spacing={4} flexWrap="wrap">
                <Button
                  as={Link}
                  href={hireMeResume.cta.href}
                  target={hireMeResume.cta.isExternal ? "_blank" : undefined}
                  rel={hireMeResume.cta.isExternal ? "noopener noreferrer" : undefined}
                  bg="white"
                  color="#16337f"
                  rightIcon={<HiArrowRight />}
                  _hover={{ bg: "#edf3ff", textDecoration: "none" }}
                >
                  {hireMeResume.cta.label}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  color="white"
                  border="1px solid rgba(255,255,255,0.28)"
                  onClick={() => setIsDrawerOpen(true)}
                  _hover={{ bg: "rgba(255,255,255,0.08)" }}
                >
                  Quick Resume
                </Button>
              </HStack>
            </VStack>
          </Box>
        </SimpleGrid>
      </HireMeSection>

      <AnimatePresence>
        {isDrawerOpen ? (
          <MotionBox
            position="fixed"
            inset="0"
            zIndex="40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <MotionBox
              position="absolute"
              inset="0"
              bg="rgba(15, 23, 42, 0.38)"
              onClick={() => setIsDrawerOpen(false)}
            />
            <MotionBox
              position="absolute"
              top="0"
              right="0"
              h="100vh"
              w={{ base: "100%", sm: "460px" }}
              bg="white"
              boxShadow="-24px 0 48px rgba(15, 23, 42, 0.18)"
              p={{ base: 6, md: 7 }}
              overflowY="auto"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <VStack align="stretch" spacing={6}>
                <HStack justify="space-between" align="start">
                  <VStack align="start" spacing={1}>
                    <Text fontSize="0.72rem" textTransform="uppercase" letterSpacing="0.22em" color="brand.500" fontWeight="800">
                      Quick Resume
                    </Text>
                    <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800" color="#171c27" letterSpacing="-0.04em">
                      Quick Overview
                    </Text>
                  </VStack>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsDrawerOpen(false)}
                    leftIcon={<HiX />}
                  >
                    Close
                  </Button>
                </HStack>

                <Text fontSize="md" lineHeight="1.85" color="#556173" whiteSpace="pre-line">
                  {hireMeResume.description}
                </Text>

                <VStack align="stretch" spacing={4}>
                  {hireMeResume.highlights.map((fact) => (
                    <Box key={fact} p={4} borderRadius="16px" bg="#f7f9fc" border="1px solid rgba(219, 224, 232, 0.92)">
                      <Text fontSize="sm" lineHeight="1.8" color="#445368">
                        {fact}
                      </Text>
                    </Box>
                  ))}
                </VStack>

                <Button
                  as={Link}
                  href="#contact"
                  bg="brand.600"
                  color="white"
                  onClick={() => setIsDrawerOpen(false)}
                  _hover={{ bg: "brand.500", textDecoration: "none" }}
                >
                  Let&apos;s Connect
                </Button>
              </VStack>
            </MotionBox>
          </MotionBox>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default HireMeAboutResume;
