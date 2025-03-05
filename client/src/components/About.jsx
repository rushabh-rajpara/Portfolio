import {
  Box,
  Heading,
  VStack,
  Text,
  HStack,
  Button,
  Image,
  Progress,
  Tooltip,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet";

// Motion Components
const MotionBox = motion(Box);
const MotionProgress = motion(Progress);
const MotionHeading = motion(Heading);

const skills = [
  { name: "HTML5", value: 90 },
  { name: "CSS3", value: 95 },
  { name: "JavaScript", value: 92 },
  { name: "React.js", value: 85 },
  { name: "Node.js", value: 88 },
  { name: "MongoDB", value: 87 },
  { name: "Git", value: 93 },
  { name: "Figma", value: 80 },
];

const About = () => {
  const bg = useColorModeValue("white", "black");
  const textColor = useColorModeValue("black", "white");
  const headingColor = useColorModeValue("black", "yellow.400");
  const progressBg = useColorModeValue("yellow.200", "gray.700");
  const progressBar = useColorModeValue("black", "yellow.400");

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true });
  const skillsInView = useInView(skillsRef, { once: true });

  return (
    <>
      <Helmet>
        <title>Rushabh Rajpara - About</title>
        <meta
          name="description"
          content="Learn more about Rushabh Rajpara, a passionate Full-Stack Developer with expertise in modern web technologies."
        />
        <meta
          name="keywords"
          content="Rushabh Rajpara, About, Full-Stack Developer, Web Technologies, Interactive Web Applications"
        />
        <meta name="author" content="Rushabh Rajpara" />
      </Helmet>
      <Box
        id="about"
        py={20}
        px={{ base: 6, md: 20 }}
        bg={bg}
        color={textColor}
      >
        {/* Wave Transition Effect */}
        <Box
          position="absolute"
          top="-50px"
          left="0"
          width="100%"
          height="100px"
          overflow="hidden"
          zIndex={-1}
        >
          <svg
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill={useColorModeValue("#fbd38d", "#1a202c")}
              d="M0,256L80,240C160,224,320,192,480,176C640,160,800,160,960,144C1120,128,1280,96,1360,80L1440,64V320H0Z"
            />
          </svg>
        </Box>

        {/* Floating About Section */}
        <HStack
          align="center"
          spacing={12}
          flexWrap="wrap"
          justify="space-between"
          maxW="1200px"
          mx="auto"
          ref={aboutRef}
        >
          {/* Profile Image with Lazy Loading */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={aboutInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
          >
            <Image
              borderRadius="lg"
              src="https://via.placeholder.com/400"
              alt="Profile"
              boxSize="300px"
              mx="auto"
              loading="lazy"
              _hover={{
                transform: "rotate(3deg)",
                transition: "transform 0.3s ease-in-out",
              }} // CSS instead of whileHover
            />
          </motion.div>

          {/* Right Section: About Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <Heading fontSize="4xl" mb={4} color={headingColor}>
              About Me
            </Heading>
            <Text fontSize="lg" maxW="600px" mb={6} lineHeight="1.8">
              I'm a passionate Full-Stack Developer with expertise in modern web
              technologies. I love creating **interactive, responsive** web
              applications and ensuring a **smooth UX**.
            </Text>

            {/* Signature & Resume Button */}
            <HStack mt={6} spacing={6}>
              <Text fontSize="3xl" fontFamily="cursive" fontWeight="bold">
                Rushabh
              </Text>
              <Button
                colorScheme="yellow"
                background="#ffd700"
                size="lg"
                as="a"
                href="https://drive.google.com/uc?export=download&id=1_rpsT9uuICu32nMNemRPtDp_f4avwhP3"
                download
              >
                Download Resume
              </Button>
            </HStack>
          </motion.div>
        </HStack>

        <Divider my={16} />

        {/* Skills Section */}
        <Box id="skills-section" maxW="900px" mx="auto" mt={12} ref={skillsRef}>
          <MotionHeading
            fontSize="3xl"
            textAlign="center"
            mb={6}
            color={headingColor}
            initial={{ opacity: 0 }}
            animate={skillsInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            My Skills
          </MotionHeading>

          <HStack spacing={8} flexWrap="wrap">
            {[0, 1].map((col) => (
              <VStack flex="1" spacing={6} w="full" key={col}>
                {skills.slice(col * 4, col * 4 + 4).map((skill, index) => (
                  <Box key={index} w="full">
                    <HStack justify="space-between">
                      <Text fontWeight="bold">{skill.name}</Text>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={skillsInView ? { opacity: 1 } : {}}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      >
                        {skill.value}%
                      </motion.span>
                    </HStack>
                    <Tooltip
                      label={`${skill.value}%`}
                      aria-label="Skill Percentage"
                    >
                      <MotionProgress
                        value={skillsInView ? skill.value : 0}
                        size="lg"
                        colorScheme="yellow"
                        bg={progressBg}
                        sx={{ "& > div": { backgroundColor: progressBar } }}
                        initial={{ width: "0%" }}
                        animate={
                          skillsInView ? { width: `${skill.value}%` } : {}
                        }
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </Tooltip>
                  </Box>
                ))}
              </VStack>
            ))}
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default About;
