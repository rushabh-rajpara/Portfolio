import {
  Box,
  Heading,
  VStack,
  Text,
  Input,
  Textarea,
  Button,
  HStack,
  useColorModeValue,
  Link,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const bg = useColorModeValue("white", "black");
  const textColor = useColorModeValue("black", "white");
  const headingColor = useColorModeValue("black", "yellow.400");
  const inputBg = useColorModeValue("gray.900", "gray.800");
  const inputBorder = useColorModeValue("yellow.400", "yellow.600");
  const buttonBg = useColorModeValue("yellow.400", "yellow.500");
  const githubColor = useColorModeValue("black", "white");

  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_a01ix4l",
        "template_t252a75",
        formRef.current,
        "JEfOG-4XHbVzPJHbe",
      )
      .then(
        () => {
          setMessage("Message sent successfully!");
          setIsSending(false);
        },
        () => {
          setMessage("Failed to send message. Try again later.");
          setIsSending(false);
        },
      );
  };

  return (
    <Box id="contact" py={20} px={{ base: 6, md: 20 }} bg={bg} color={textColor}>
      <VStack spacing={4} textAlign="center" mb={12}>
        <Heading fontSize="4xl" fontWeight="bold" color={headingColor}>
          Have a project in mind?
        </Heading>
        <Text maxW="700px">
          I work with agencies and businesses to deliver web applications, MVPs, SaaS products, and automation systems with reliable execution.
        </Text>
      </VStack>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        gap={12}
        maxW="1100px"
        mx="auto"
      >
        <VStack align="start" spacing={6} flex="1" w="100%">
          {[
            { icon: FaPhone, text: "+1 548 398 0233" },
            {
              icon: FaEnvelope,
              text: "rushabh4478@gmail.com",
              link: "mailto:rushabh4478@gmail.com",
            },
            {
              icon: FaGlobe,
              text: "rushabh-rajpara",
              link: "https://rushabh-rajpara.github.io/Portfolio/",
            },
            { icon: FaMapMarkerAlt, text: "Waterloo, ON, CA" },
          ].map(({ icon, text, link }, index) => (
            <HStack key={index} spacing={4} w="100%">
              <Icon as={icon} boxSize={6} color={headingColor} />
              {link ? (
                <Text fontSize="md">
                  <Link href={link} target="_blank" rel="noopener noreferrer">
                    {text}
                  </Link>
                </Text>
              ) : (
                <Text fontSize="md">{text}</Text>
              )}
            </HStack>
          ))}

          <HStack spacing={6} mt={4}>
            {[
              { icon: FaGithub, link: "https://github.com", color: githubColor },
              { icon: FaLinkedin, link: "https://linkedin.com", color: "#0077B5" },
              { icon: FaTwitter, link: "https://twitter.com", color: "#1DA1F2" },
            ].map(({ icon, link, color }, index) => (
              <Link key={index} href={link} target="_blank" rel="noopener noreferrer">
                <Icon
                  as={icon}
                  boxSize={7}
                  color={color}
                  transition="transform 0.3s ease-in-out, color 0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.2) rotate(5deg)",
                  }}
                />
              </Link>
            ))}
          </HStack>
        </VStack>

        <Box
          as="form"
          ref={formRef}
          onSubmit={sendEmail}
          p={8}
          flex="1"
          w="100%"
          bg={inputBg}
          borderRadius="lg"
          boxShadow="lg"
        >
          <VStack spacing={5} align="start" w="100%">
            <Input
              name="name"
              placeholder="Your Name"
              bg="transparent"
              border="2px solid"
              borderColor={inputBorder}
              _placeholder={{ color: "gray.500" }}
              size="lg"
              w="100%"
              color="white"
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              bg="transparent"
              border="2px solid"
              borderColor={inputBorder}
              _placeholder={{ color: "gray.500" }}
              size="lg"
              w="100%"
              color="white"
              required
            />
            <Textarea
              name="message"
              placeholder="Project Description"
              bg="transparent"
              border="2px solid"
              borderColor={inputBorder}
              _placeholder={{ color: "gray.500" }}
              size="lg"
              rows={5}
              w="100%"
              color="white"
              required
            />
            <Button
              type="submit"
              bg={buttonBg}
              color="black"
              size="lg"
              w="100%"
              _hover={{ bg: "yellow.600", transform: "scale(1.05)", transition: "0.3s" }}
              isLoading={isSending}
            >
              {isSending ? "Sending..." : "Start a Project"}
            </Button>
            {message && (
              <Text fontSize="md" color="green.400">
                {message}
              </Text>
            )}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
