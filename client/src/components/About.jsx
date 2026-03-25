import { useRef } from "react";
import {
  Box,
  Heading,
  Text,
  HStack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const About = () => {
  const bg = useColorModeValue("white", "black");
  const textColor = useColorModeValue("black", "white");
  const headingColor = useColorModeValue("black", "yellow.400");

  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true });

  return (
    <Box
      id="about"
      py={20}
      px={{ base: 6, md: 20 }}
      bg={bg}
      color={textColor}
      ref={aboutRef}
      overflow="hidden"
    >
      <HStack
        align="center"
        spacing={12}
        flexWrap="wrap"
        justify="center"
        maxW="1200px"
        mx="auto"
        flexDirection={{ base: "column", md: "row" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Box display="flex" justifyContent="center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={aboutInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <DotLottieReact
              src="https://lottie.host/c1c6a87e-8b37-4e2b-b6f5-fc51469e037c/yOCTgija8O.lottie"
              loop
              autoplay
              style={{ width: "300px", height: "300px" }}
            />
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Heading fontSize="4xl" mb={4} color={headingColor}>
            About
          </Heading>
          <Text fontSize="lg" maxW="620px" mb={6} lineHeight="1.8">
            I help businesses and agencies turn ideas into reliable software through clear planning and dependable execution.
            I focus on clean builds, practical architecture, and outcomes that support real operations.
          </Text>

          <HStack mt={6} spacing={6} justify={{ base: "center", md: "flex-start" }}>
            <Text fontSize="3xl" fontFamily="cursive" fontWeight="bold">
              Rushabh
            </Text>
            <Button colorScheme="yellow" background="#ffd700" size="lg" as="a" href="#contact">
              Let&apos;s Talk
            </Button>
          </HStack>
        </motion.div>
      </HStack>
    </Box>
  );
};

export default About;
