import React, { useRef } from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  HStack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Helmet } from "react-helmet";

// Motion Components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const About = () => {
  const bg = useColorModeValue("white", "black");
  const textColor = useColorModeValue("black", "white");
  const headingColor = useColorModeValue("black", "yellow.400");

  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true });

  return (
    <>
      <Helmet>
        <meta name="description" content="Hi, I'm Rushabh Rajpara, a passionate Full-Stack Developer." />
        <meta name="keywords" content="Rushabh Rajpara, Portfolio, Web Developer" />
      </Helmet>

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
          justify="center"  // ✅ Centers content on all screens
          maxW="1200px"
          mx="auto"
          flexDirection={{ base: "column", md: "row" }} // ✅ Stack on mobile, row on larger screens
          textAlign={{ base: "center", md: "left" }} // ✅ Centers text on mobile, aligns left on larger screens
        >
          {/* ✅ Centered Lottie Animation */}
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

          {/* About Me Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <Heading fontSize="4xl" mb={4} color={headingColor}>
              About Me
            </Heading>
            <Text fontSize="lg" maxW="600px" mb={6} lineHeight="1.8">
              I'm a passionate Full-Stack Developer specializing in **React, Node.js, and modern web technologies**.
              I love crafting **interactive, high-performance applications** that provide a seamless UX.
            </Text>

            {/* Resume Button */}
            <HStack mt={6} spacing={6} justify={{ base: "center", md: "flex-start" }}> {/* ✅ Centers on mobile */}
              <Text fontSize="3xl" fontFamily="cursive" fontWeight="bold">
                Rushabh
              </Text>
              <Button
                colorScheme="yellow"
                background="#ffd700"
                size="lg"
                as="a"
                href="https://drive.google.com/uc?export=download&id=1sizkqSzSYPSq2YmlzMm6dEYVskg27CYX"
                download
              >
                Download Resume
              </Button>
            </HStack>
          </motion.div>
        </HStack>
      </Box>
    </>
  );
};

export default About;
