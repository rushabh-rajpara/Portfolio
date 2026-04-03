import {
  Box,
  VStack,
  Text,
  Input,
  Textarea,
  Button,
  HStack,
  useColorModeValue,
  Link,
  Icon,
  SimpleGrid,
  FormControl,
  FormLabel,
  Container,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const bg = useColorModeValue("#eef1f6", "bg.tint");
  const textColor = useColorModeValue("text.primary", "text.primary");
  const cardBg = useColorModeValue("white", "bg.surface");
  const inputBorder = useColorModeValue("#d9dee7", "border.soft");
  const subtleColor = useColorModeValue("text.secondary", "text.secondary");
  const iconColor = useColorModeValue("#3b516c", "accent.primary");
  const cardBorder = useColorModeValue("#d8e0ea", "border.soft");
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

  const contactItems = [
    { icon: FaPhone, text: "+1 548 398 0233", link: "tel:+15483980233" },
    { icon: FaEnvelope, text: "rushabh4478@gmail.com", link: "mailto:rushabh4478@gmail.com" },
    { icon: FaGlobe, text: "rushabh-rajpara", link: "https://rushabh-rajpara.github.io/Portfolio/" },
    { icon: FaMapMarkerAlt, text: "Burlington, ON, CA" },
  ];

  const socialItems = [
    { icon: FaGithub, link: "https://github.com/rushabh-rajpara" },
    { icon: FaGlobe, link: "https://rushabh-rajpara.github.io/Portfolio/" },
  ];

  return (
    <Box id="contact" py={{ base: 16, md: 20, lg: 24 }} px={{ base: 5, md: 8 }} bg={bg} color={textColor}>
      <Container maxW="1320px" px={{ base: 0, md: 2 }}>
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={{ base: 10, lg: 16 }} alignItems="start">
        <VStack
          align="start"
          spacing={8}
          py={{ base: 2, md: 4 }}
          pr={{ base: 0, xl: 10 }}
          minH={{ base: "auto", xl: "580px" }}
        >
          <VStack align="start" spacing={4}>
            <Text fontSize={{ base: "2xl", md: "2.4rem" }} lineHeight="1.08" letterSpacing="-0.04em" fontFamily="body" fontWeight="600">
              {t("contact.directTitle")}
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} color={subtleColor} lineHeight="1.7" maxW="34ch">
              {t("contact.directSupport")}
            </Text>
          </VStack>

          <HStack spacing={4} flexWrap="wrap" w="100%">
            <Button as="a" href="mailto:rushabh4478@gmail.com" size="md" variant="outline" borderColor={inputBorder} bg="transparent" minW={{ base: "100%", sm: "unset" }}>
              {t("contact.emailNow")}
            </Button>
            <Button as="a" href="tel:+15483980233" size="md" variant="outline" borderColor={inputBorder} bg="transparent" minW={{ base: "100%", sm: "unset" }}>
              {t("contact.callNow")}
            </Button>
          </HStack>

          <VStack align="start" spacing={5} pt={1}>
            {contactItems.map(({ icon, text, link }) => (
              <HStack key={text} spacing={{ base: 3, md: 5 }} align="center" w="100%">
                <Icon as={icon} boxSize={{ base: 4, md: 6 }} color={iconColor} flexShrink={0} />
                {link ? (
                  <Link
                    href={link}
                    target={link.startsWith("http") ? "_blank" : undefined}
                    rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                    fontSize={{ base: "md", md: "xl" }}
                    letterSpacing="-0.03em"
                    wordBreak="break-word"
                    _hover={{ textDecoration: "none", color: "accent.primary" }}
                  >
                    {text}
                  </Link>
                ) : (
                  <Text fontSize={{ base: "md", md: "xl" }} letterSpacing="-0.03em" wordBreak="break-word">
                    {text}
                  </Text>
                )}
              </HStack>
            ))}
          </VStack>

          <HStack spacing={5} pt={1}>
            {socialItems.map(({ icon, link }) => (
              <Link key={link} href={link} target="_blank" rel="noopener noreferrer">
                <Icon
                  as={icon}
                  boxSize={8}
                  color={iconColor}
                  transition="transform 0.22s ease, color 0.22s ease"
                  _hover={{ transform: "translateY(-2px)", color: "accent.primary" }}
                />
              </Link>
            ))}
          </HStack>
        </VStack>

        <Box
          as="form"
          ref={formRef}
          onSubmit={sendEmail}
          bg={cardBg}
          border="1px solid"
          borderColor={cardBorder}
          borderRadius="2xl"
          p={{ base: 7, md: 9 }}
          boxShadow="0 8px 28px rgba(15, 23, 42, 0.05)"
          maxW={{ base: "100%", xl: "580px" }}
          w="100%"
          ml={{ base: 0, xl: "auto" }}
        >
          <VStack spacing={5} align="start" w="100%">
            <FormControl isRequired>
              <FormLabel fontSize={{ base: "sm", md: "md" }} mb={2.5} fontWeight="500">
                {t("contact.nameLabel")} <Box as="span" color="red.400">*</Box>
              </FormLabel>
              <Input
                aria-label={t("contact.nameLabel")}
                name="name"
                placeholder={t("contact.namePlaceholder")}
                bg="transparent"
                border="1px solid"
                borderColor={inputBorder}
                _placeholder={{ color: "#9aa9bc" }}
                size="md"
                h={{ base: "54px", md: "56px" }}
                fontSize={{ base: "md", md: "xl" }}
                letterSpacing="-0.03em"
                borderRadius="xl"
                color={textColor}
                required
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize={{ base: "sm", md: "md" }} mb={2.5} fontWeight="500">
                {t("contact.emailLabel")} <Box as="span" color="red.400">*</Box>
              </FormLabel>
              <Input
                aria-label={t("contact.emailLabel")}
                name="email"
                type="email"
                placeholder={t("contact.emailPlaceholder")}
                bg="transparent"
                border="1px solid"
                borderColor={inputBorder}
                _placeholder={{ color: "#9aa9bc" }}
                size="md"
                h={{ base: "54px", md: "56px" }}
                fontSize={{ base: "md", md: "xl" }}
                letterSpacing="-0.03em"
                borderRadius="xl"
                color={textColor}
                required
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize={{ base: "sm", md: "md" }} mb={2.5} fontWeight="500">
                {t("contact.messageLabel")} <Box as="span" color="red.400">*</Box>
              </FormLabel>
              <Textarea
                aria-label={t("contact.messageLabel")}
                name="message"
                placeholder={t("contact.messagePlaceholder")}
                bg="transparent"
                border="1px solid"
                borderColor={inputBorder}
                _placeholder={{ color: "#9aa9bc" }}
                rows={6}
                fontSize={{ base: "md", md: "xl" }}
                letterSpacing="-0.03em"
                borderRadius="xl"
                color={textColor}
                required
              />
            </FormControl>

            <Button
              type="submit"
              bg="#3b516c"
              color="white"
              size="lg"
              w="100%"
              h={{ base: "56px", md: "58px" }}
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="500"
              borderRadius="xl"
              _hover={{ bg: "accent.hover", transform: "translateY(-2px)", boxShadow: "cardHover" }}
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
      </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;
