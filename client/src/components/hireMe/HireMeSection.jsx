import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const HireMeSection = ({
  id,
  eyebrow,
  title,
  description,
  children,
  bg = "transparent",
  py = { base: 20, md: 24, lg: 28 },
  spacing = { base: 10, md: 12 },
  revealOnMount = false,
}) => (
  <MotionBox
    as="section"
    id={id}
    py={py}
    bg={bg}
    initial={{ opacity: 0, y: 26 }}
    {...(revealOnMount
      ? { animate: { opacity: 1, y: 0 } }
      : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } })}
    transition={{ duration: 0.55, ease: "easeOut" }}
  >
    <Container maxW="1340px" px={{ base: 5, md: 7 }}>
      <VStack align="stretch" spacing={spacing}>
        {(eyebrow || title || description) && (
          <VStack align="start" spacing={4} maxW="760px">
            {eyebrow ? (
              <Text
                fontSize="0.72rem"
                textTransform="uppercase"
                letterSpacing="0.24em"
                fontWeight="700"
                color="brand.500"
              >
                {eyebrow}
              </Text>
            ) : null}
            {title ? (
              <Heading
                fontSize={{ base: "2rem", md: "2.75rem" }}
                lineHeight="0.96"
                color="#171c27"
                fontWeight="700"
              >
                {title}
              </Heading>
            ) : null}
            {description ? (
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.9"
                color="#546072"
                maxW="62ch"
              >
                {description}
              </Text>
            ) : null}
          </VStack>
        )}
        {children}
      </VStack>
    </Container>
  </MotionBox>
);

export default HireMeSection;
