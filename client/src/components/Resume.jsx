import { Box, Heading, VStack, Text, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { Helmet } from "react-helmet";

// Motion Components for Animation
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const educationData = [
  {
    date: "2019 - 2023",
    title: "B.E. in Information and Communication Technology",
    institution: "Gujarat Technological University",
    description: "Focused on software development, database management, and web technologies.",
  },
  {
    date: "2023 - 2025",
    title: "PG Certification in Web Development",
    institution: "Conestoga College",
    description: "Specialized in full-stack web development, front-end frameworks, and modern web technologies.",
  },
];

const experienceData = [
  {
    date: "Jan 2023 – Apr 2023",
    title: "Web Developer Intern",
    company: "Webercodes Technology, Ahmedabad, Gujarat",
    description: "Designed user-friendly and functional web pages with Enhanced user experience by testing UI components and resolving bugs to improve performance.",
    techUsed: ["HTML", "CSS", "JavaScript", "ReactJS"],
  },
  {
    date: "Jun 2022 – Sep 2022",
    title: "Data Scientist Intern",
    company: "Brainybeam Technologies, Ahmedabad, Gujarat",
    description: "Mined and pre-processed data from diverse sources, applying advanced data cleaning techniques to extract meaningful insights for business solutions.",
    techUsed: ["Python", "SQL", "Machine Learning"],
  },
];


const Resume = () => {
  // Dark Mode Styles
  const bg = useColorModeValue("white", "black");
  const textColor = useColorModeValue("black", "white");
  const headingColor = useColorModeValue("black", "yellow.400");
  const cardBg = useColorModeValue("gray.100", "gray.800");

  return (
    <>
      <Helmet>
        <title>Rushabh Rajpara - Resume</title>
        <meta name="description" content="A glimpse of Rushabh Rajpara's education and work experience." />
        <meta name="keywords" content="Rushabh Rajpara, Resume, Education, Work Experience, UI/UX Designer, Frontend Developer" />
        <meta name="author" content="Rushabh Rajpara" />
      </Helmet>
      <MotionBox
        id="resume"
        py={20}
        px={{ base: 6, md: 20 }}
        bg={bg}
        color={textColor}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        overflow="hidden"
      >
        {/* Section Heading */}
        <VStack spacing={6} textAlign="center" mb={12}>
          <MotionHeading fontSize="4xl" color={headingColor} initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            Resume
          </MotionHeading>
          <Text maxW="800px" fontSize="lg">
            A glimpse of my education and work experience.
          </Text>
        </VStack>

        {/* Resume Grid */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} maxW="1200px" mx="auto">
          {/* Education Section */}
          <VStack align="start" spacing={6}>
            <Heading fontSize="2xl" color={headingColor} display="flex" alignItems="center">
              <FaGraduationCap style={{ marginRight: "8px" }} /> Education:
            </Heading>
            {educationData.map((edu, index) => (
              <MotionBox
                key={index}
                p={6}
                bg={cardBg}
                borderRadius="md"
                boxShadow="lg"
                className="resume-card"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <Text fontSize="sm" color="gray.400">
                  {edu.date}
                </Text>
                <Heading fontSize="lg" color={headingColor}>
                  {edu.title}
                </Heading>
                <Text fontWeight="bold">{edu.institution}</Text><br></br>
                <Text>{edu.description}</Text>
              </MotionBox>
            ))}
          </VStack>

          {/* Experience Section */}
          <VStack align="start" spacing={6}>
            <Heading fontSize="2xl" color={headingColor} display="flex" alignItems="center">
              <FaBriefcase style={{ marginRight: "8px" }} /> Experience:
            </Heading>
            {experienceData.map((exp, index) => (
              <MotionBox
                key={index}
                p={6}
                bg={cardBg}
                borderRadius="md"
                boxShadow="lg"
                className="resume-card"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <Text fontSize="sm" color="gray.400">
                  {exp.date}
                </Text>
                <Heading fontSize="lg" color={headingColor}>
                  {exp.title}
                </Heading>
                <Text fontWeight="bold">{exp.company}</Text><br></br>
                <Text>{exp.description}</Text>
              </MotionBox>
            ))}
          </VStack>
        </SimpleGrid>

        {/* CSS for Hover Effects */}
        <style>
          {`
            .resume-card {
              transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            }
            .resume-card:hover {
              transform: scale(1.05);
              box-shadow: 0px 0px 15px var(--accent-color);
            }
          `}
        </style>
      </MotionBox>
    </>
  );
};

export default Resume;
