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
  Badge,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaGithub, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const bg = useColorModeValue("bg.canvas", "bg.canvas");
  const textColor = useColorModeValue("text.primary", "text.primary");
  const headingColor = useColorModeValue("text.primary", "text.primary");
  const inputBg = useColorModeValue("bg.surface", "bg.surface");
  const cardBg = useColorModeValue("bg.surface", "bg.surface");
  const inputBorder = useColorModeValue("border.soft", "border.soft");
  const buttonBg = useColorModeValue("accent.primary", "accent.primary");
  const githubColor = useColorModeValue("text.primary", "text.primary");
  const subtleColor = useColorModeValue("text.secondary", "text.secondary");
  const cardBorderColor = useColorModeValue("border.soft", "border.soft");
  const { t } = useLanguage();

  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_a01ix4l",
        "template_t252a75",
        formRef.current,
        "JEfOG-4XHbVzPJHbe",
      )
      .then(
        () => {
          setMessageType("success");
          setMessage(t("contact.success"));
          setIsSending(false);
          formRef.current?.reset();
        },
        () => {
          setMessageType("error");
          setMessage(t("contact.error"));
          setIsSending(false);
        },
      );
  };

  return (
    <Box id="contact" py={{ base: 14, md: 20, lg: 24 }} px={{ base: 6, md: 20 }} bg={bg} color={textColor}>
      <VStack spacing={4} textAlign="center" mb={12}>
        <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color={headingColor}>{t("contact.heading")}</Heading>
        <Text maxW="700px" fontSize={{ base: "md", md: "lg" }} color={subtleColor}>{t("contact.subheading")}</Text>
        <Text fontSize="sm" color={subtleColor}>{t("contact.trustLine")}</Text>
        <Badge colorScheme="brand" px={3} py={1} borderRadius="full">{t("contact.responseTime")}</Badge>
      </VStack>

      <Flex direction={{ base: "column", md: "row" }} justify="center" gap={10} maxW="1120px" mx="auto">
        <VStack align="start" spacing={6} flex="1" w="100%" bg={cardBg} p={6} borderRadius="lg" border="1px solid" borderColor={cardBorderColor} boxShadow="card">
          <Text fontWeight="700" fontSize="lg">{t("contact.directTitle")}</Text>
          <Text fontSize="sm" color={subtleColor}>{t("contact.directSupport")}</Text>
          <HStack spacing={3} flexWrap="wrap">
            <Button as="a" href="mailto:rushabh4478@gmail.com" size="sm" variant="outline" borderColor={inputBorder}>{t("contact.emailNow")}</Button>
            <Button as="a" href="tel:+15483980233" size="sm" variant="outline" borderColor={inputBorder}>{t("contact.callNow")}</Button>
          </HStack>

          {[
            { icon: FaPhone, text: "+1 548 398 0233", link: "tel:+15483980233" },
            { icon: FaEnvelope, text: "rushabh4478@gmail.com", link: "mailto:rushabh4478@gmail.com" },
            { icon: FaGlobe, text: "rushabh-rajpara.github.io/Portfolio", link: "https://rushabh-rajpara.github.io/Portfolio/" },
            { icon: FaMapMarkerAlt, text: "Waterloo, ON, CA" },
          ].map(({ icon, text, link }, index) => (
            <HStack key={index} spacing={4} w="100%">
              <Icon as={icon} boxSize={5} color="accent.primary" />
              {link ? (
                <Text fontSize="md" fontWeight={icon === FaEnvelope ? "700" : "500"}>
                  <Link href={link} target={link.startsWith("http") ? "_blank" : undefined} rel={link.startsWith("http") ? "noopener noreferrer" : undefined}>{text}</Link>
                </Text>
              ) : (
                <Text fontSize="md">{text}</Text>
              )}
            </HStack>
          ))}

          <HStack spacing={6} mt={2}>
            {[
              { icon: FaGithub, link: "https://github.com/rushabh-rajpara", color: githubColor },
              { icon: FaGlobe, link: "https://rushabh-rajpara.github.io/Portfolio/", color: "accent.primary" },
            ].map(({ icon, link, color }, index) => (
              <Link key={index} href={link} target="_blank" rel="noopener noreferrer">
                <Icon
                  as={icon}
                  boxSize={7}
                  color={color}
                  transition="transform 0.22s ease, color 0.22s ease"
                  _hover={{ transform: "translateY(-2px) scale(1.06)", color: "accent.primary" }}
                />
              </Link>
            ))}
          </HStack>
        </VStack>

        <Box as="form" ref={formRef} onSubmit={sendEmail} p={{ base: 6, md: 8 }} flex="1" w="100%" bg={inputBg} borderRadius="lg" boxShadow="card" border="1px solid" borderColor={cardBorderColor}>
          <VStack spacing={5} align="start" w="100%">
            <FormControl isRequired>
              <FormLabel fontSize="sm" mb={2}>{t("contact.nameLabel")}</FormLabel>
              <Input aria-label={t("contact.nameLabel")} name="name" placeholder={t("contact.namePlaceholder")} bg="transparent" border="1px solid" borderColor={inputBorder} _placeholder={{ color: "neutral.400" }} size="lg" w="100%" color={textColor} required />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize="sm" mb={2}>{t("contact.emailLabel")}</FormLabel>
              <Input aria-label={t("contact.emailLabel")} name="email" type="email" placeholder={t("contact.emailPlaceholder")} bg="transparent" border="1px solid" borderColor={inputBorder} _placeholder={{ color: "neutral.400" }} size="lg" w="100%" color={textColor} required />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize="sm" mb={2}>{t("contact.messageLabel")}</FormLabel>
              <Textarea aria-label={t("contact.messageLabel")} name="message" placeholder={t("contact.messagePlaceholder")} bg="transparent" border="1px solid" borderColor={inputBorder} _placeholder={{ color: "neutral.400" }} size="lg" rows={5} w="100%" color={textColor} required />
            </FormControl>
            <Button
              type="submit"
              bg={buttonBg}
              color="white"
              size="lg"
              w="100%"
              _hover={{ bg: "accent.hover", transform: "translateY(-2px)", boxShadow: "cardHover", transition: "0.22s" }}
              isLoading={isSending}
            >
              {isSending ? t("contact.sending") : t("contact.button")}
            </Button>
            {message && (
              <Text fontSize="md" color={messageType === "success" ? "state.success" : "state.error"}>
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
