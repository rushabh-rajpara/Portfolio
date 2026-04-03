import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useMemo, useState } from "react";
import HireMeSection from "./HireMeSection";
import { hireMeContact } from "../../content/hireMeContent";

const socialLinks = hireMeContact.items.filter((item) => item.label !== "Email");

const HireMeContact = () => {
  const [values, setValues] = useState({ name: "", email: "", inquiry: "" });
  const [touched, setTouched] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const errors = useMemo(
    () => ({
      name: values.name.trim() ? "" : "Please add your name.",
      email: /\S+@\S+\.\S+/.test(values.email) ? "" : "Enter a valid email address.",
      inquiry: values.inquiry.trim().length >= 12 ? "" : "Share a bit more about the project.",
    }),
    [values],
  );

  const hasError = Object.values(errors).some(Boolean);

  const handleChange = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setStatus("idle");
    setStatusMessage("");
  };

  const handleBlur = (field) => () => {
    setTouched((current) => ({ ...current, [field]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({ name: true, email: true, inquiry: true });

    if (hasError) {
      setStatus("error");
      setStatusMessage("A few fields still need attention before sending.");
      return;
    }

    setIsSending(true);
    setStatus("idle");
    setStatusMessage("");

    emailjs
      .send(
        "service_a01ix4l",
        "template_t252a75",
        {
          name: values.name.trim(),
          email: values.email.trim(),
          message: [
            "Developer portfolio inquiry",
            "",
            `Name: ${values.name.trim()}`,
            `Email: ${values.email.trim()}`,
            "",
            "Project brief:",
            values.inquiry.trim(),
          ].join("\n"),
        },
        "JEfOG-4XHbVzPJHbe",
      )
      .then(() => {
        setStatus("success");
        setStatusMessage("Your brief was sent successfully.");
        setValues({ name: "", email: "", inquiry: "" });
        setTouched({});
      })
      .catch(() => {
        setStatus("error");
        setStatusMessage("Couldn't send the brief right now. Please try again in a moment.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <HireMeSection
      id="contact"
      bg="linear-gradient(180deg, rgba(239,243,249,0.76) 0%, rgba(246,248,252,0.96) 100%)"
    >
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 14 }} alignItems="start">
        <VStack align="start" spacing={{ base: 6, md: 7 }} pt={{ base: 0, lg: 6 }} maxW="600px">
          <Text
            fontFamily="'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Georgia, serif"
            fontSize={{ base: "2.6rem", md: "4rem", xl: "4.4rem" }}
            lineHeight="0.96"
            letterSpacing="-0.05em"
            color="#171c27"
            fontWeight="500"
          >
            Ready to build something intentional?
          </Text>

          <Text fontSize={{ base: "lg", md: "xl" }} lineHeight="1.8" color="#556173" maxW="28ch">
            {hireMeContact.description}
          </Text>

          <Link href="mailto:rushabh4478@gmail.com" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800" color="brand.600" letterSpacing="-0.04em" _hover={{ textDecoration: "none", color: "brand.500" }}>
            rushabh4478@gmail.com
          </Link>

          <SimpleGrid columns={{ base: 2, sm: 3 }} spacing={4} pt={1}>
            {socialLinks.map((item) => (
              <Link key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" fontSize="xs" textTransform="uppercase" letterSpacing="0.18em" color="#8a96a8" _hover={{ textDecoration: "none", color: "brand.600" }}>
                {item.label}
              </Link>
            ))}
          </SimpleGrid>
        </VStack>

        <Box as="form" onSubmit={handleSubmit} bg="#eef2f7" border="1px solid rgba(219, 224, 232, 0.95)" borderRadius="18px" p={{ base: 6, md: 7 }} boxShadow="0 18px 36px rgba(22, 33, 56, 0.08)">
          <VStack align="stretch" spacing={5}>
            <FormControl isInvalid={Boolean(touched.name && errors.name)}>
              <FormLabel mb={2} fontSize="xs" fontWeight="800" textTransform="uppercase" letterSpacing="0.14em" color="#29364a">
                Name
              </FormLabel>
              <Input name="name" autoComplete="name" value={values.name} onChange={handleChange("name")} onBlur={handleBlur("name")} placeholder="Jane Cooper" bg="white" border="1px solid rgba(224, 228, 235, 0.95)" borderRadius="4px" h="56px" px={4} color="#233146" _placeholder={{ color: "#8b97aa" }} _hover={{ borderColor: "#d8dfe8" }} _focusVisible={{ borderColor: "brand.500", boxShadow: "none" }} />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(touched.email && errors.email)}>
              <FormLabel mb={2} fontSize="xs" fontWeight="800" textTransform="uppercase" letterSpacing="0.14em" color="#29364a">
                Email
              </FormLabel>
              <Input name="email" type="email" autoComplete="email" inputMode="email" value={values.email} onChange={handleChange("email")} onBlur={handleBlur("email")} placeholder="jane@company.com" bg="white" border="1px solid rgba(224, 228, 235, 0.95)" borderRadius="4px" h="56px" px={4} color="#233146" _placeholder={{ color: "#8b97aa" }} _hover={{ borderColor: "#d8dfe8" }} _focusVisible={{ borderColor: "brand.500", boxShadow: "none" }} />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(touched.inquiry && errors.inquiry)}>
              <FormLabel mb={2} fontSize="xs" fontWeight="800" textTransform="uppercase" letterSpacing="0.14em" color="#29364a">
                Inquiry
              </FormLabel>
              <Textarea name="inquiry" autoComplete="off" value={values.inquiry} onChange={handleChange("inquiry")} onBlur={handleBlur("inquiry")} placeholder="Tell me about your project..." bg="white" border="1px solid rgba(224, 228, 235, 0.95)" borderRadius="4px" minH="132px" px={4} py={3} color="#233146" resize="vertical" _placeholder={{ color: "#8b97aa" }} _hover={{ borderColor: "#d8dfe8" }} _focusVisible={{ borderColor: "brand.500", boxShadow: "none" }} />
              <FormErrorMessage>{errors.inquiry}</FormErrorMessage>
            </FormControl>

            <Button bg="brand.600" color="white" h="56px" borderRadius="10px" fontSize="md" fontWeight="800" type="submit" isLoading={isSending} loadingText="Sending..." _hover={{ bg: "brand.500" }}>
              Send Brief
            </Button>

            {status !== "idle" && statusMessage ? (
              <Text
                fontSize="sm"
                color={status === "success" ? "green.600" : "red.500"}
                fontWeight="600"
                aria-live="polite"
              >
                {statusMessage}
              </Text>
            ) : null}
          </VStack>
        </Box>
      </SimpleGrid>
    </HireMeSection>
  );
};

export default HireMeContact;
