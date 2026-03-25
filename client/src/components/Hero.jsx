import { Box, Heading, Text, Button, Image, VStack, HStack, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useRef } from "react";
import { useScroll, useTransform, useInView } from "framer-motion";
import profile from "../images/profile.jpg";

const textVariant = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.03 },
  }),
};

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Hero = () => {
  const bg = useColorModeValue("white", "black");
  const textColor = useColorModeValue("black", "yellow.400");
  const buttonTextColor = useColorModeValue("black", "white");

  const headline = "I build web applications, MVPs, and automation systems for businesses and agencies.";

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  return (
    <MotionBox
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      bg={bg}
      color={textColor}
      ref={heroRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.3 }}
      overflow="hidden"
      style={{ scale, opacity }}
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 12 }}
    >
      <VStack spacing={{ base: 5, md: 8 }} zIndex={1} width="100%" maxW="900px">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
          <Image
            borderRadius="full"
            boxSize={{ base: "100px", sm: "120px", md: "160px" }}
            src={profile}
            alt="Rushabh Rajpara Profile"
            border="4px solid var(--accent-color)"
            loading="lazy"
          />
        </motion.div>

        <Heading fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} fontWeight="bold" color={textColor}>
          {headline.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </Heading>

        <Text fontSize={{ base: "md", sm: "lg", md: "xl" }} fontWeight="medium" color={useColorModeValue("gray.700", "gray.300")}>
          Fast, reliable development - from idea to deployment.
        </Text>

        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>Based in Canada, working globally with a skilled development team.</Text>

        <HStack spacing={5}>
          {[
            { icon: FaGithub, link: "https://github.com", color: useColorModeValue("black", "white") },
            { icon: FaLinkedin, link: "https://linkedin.com", color: "#0A66C2" },
            { icon: FaTwitter, link: "https://twitter.com", color: "#1DA1F2" },
          ].map(({ icon, link, color }, index) => (
            <motion.a key={index} whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }} href={link} target="_blank" rel="noopener noreferrer">
              {icon({ size: 26, color })}
            </motion.a>
          ))}
        </HStack>

        <HStack spacing={4} flexDirection={{ base: "column", sm: "row" }}>
          <Button colorScheme="yellow" background="#ffd700" size="lg" as="a" href="#contact" width={{ base: "100%", sm: "auto" }}>
            Start a Project
          </Button>
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            colorScheme="blue"
            size="lg"
            variant="outline"
            color={buttonTextColor}
            as="a"
            href="#projects"
            width={{ base: "100%", sm: "auto" }}
          >
            View Case Studies
          </MotionButton>
        </HStack>
      </VStack>
    </MotionBox>
  );
};

export default Hero;
