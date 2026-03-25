import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactDetails } from "../content/siteContent";

const Contact = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_a01ix4l",
        "template_t252a75",
        formRef.current,
        "JEfOG-4XHbVzPJHbe",
      );
      setStatus("Message sent successfully. I will get back to you soon.");
      formRef.current?.reset();
    } catch {
      setStatus("Unable to send right now. Please email me directly.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Box as="section" id="contact" py={{ base: 14, md: 20 }} bg="brand.surfaceAlt">
      <Container maxW="1200px">
        <Stack spacing={3} mb={10} maxW="760px">
          <Heading as="h2" size="xl" color="brand.ink">
            Have a project in mind?
          </Heading>
          <Text color="brand.muted">
            If you are an agency, small business, or local Canadian company looking for reliable development support, let&apos;s talk.
          </Text>
        </Stack>

        <Flex direction={{ base: "column", lg: "row" }} gap={8}>
          <VStack
            align="stretch"
            spacing={4}
            flex="1"
            p={6}
            border="1px solid"
            borderColor="brand.border"
            borderRadius="xl"
            bg="white"
          >
            <Heading as="h3" size="md" color="brand.ink">
              Contact Options
            </Heading>
            <Text color="brand.muted">
              Email: <Link href={`mailto:${contactDetails.email}`}>{contactDetails.email}</Link>
            </Text>
            <Text color="brand.muted">
              LinkedIn: <Link href={contactDetails.linkedin} isExternal rel="noopener noreferrer">{contactDetails.linkedin}</Link>
            </Text>
            <Text color="brand.muted">
              GitHub: <Link href={contactDetails.github} isExternal rel="noopener noreferrer">{contactDetails.github}</Link>
            </Text>
            <Text color="brand.muted">Location: {contactDetails.location}</Text>
            <HStack pt={2}>
              <Button as="a" href={`mailto:${contactDetails.email}`} bg="brand.primary" color="white" _hover={{ bg: "brand.primaryHover" }}>
                Let&apos;s Talk
              </Button>
            </HStack>
          </VStack>

          <Box
            as="form"
            ref={formRef}
            onSubmit={sendEmail}
            flex="1"
            p={6}
            border="1px solid"
            borderColor="brand.border"
            borderRadius="xl"
            bg="white"
          >
            <VStack spacing={4} align="stretch">
              <Input name="name" placeholder="Your Name" required bg="white" />
              <Input name="email" type="email" placeholder="Email Address" required bg="white" />
              <Textarea name="message" placeholder="Project details" rows={5} required bg="white" />
              <Button type="submit" bg="brand.primary" color="white" _hover={{ bg: "brand.primaryHover" }} isLoading={isSending}>
                {isSending ? "Sending..." : "Start a Project"}
              </Button>
              {status && (
                <Text fontSize="sm" color={status.includes("successfully") ? "green.600" : "orange.600"}>
                  {status}
                </Text>
              )}
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;
