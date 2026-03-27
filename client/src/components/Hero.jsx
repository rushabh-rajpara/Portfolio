import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  HStack,
  useColorModeValue,
  Wrap,
  WrapItem,
  Badge,
  Link,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaGlobe } from "react-icons/fa";
import { useRef } from "react";
import { useInView } from "framer-motion";
import profile from "../images/profile.jpg";
import { useLanguage } from "../context/LanguageContext";

const MotionBox = motion(Box);

const Hero = () => {
  const bg = useColorModeValue("bg.canvas", "bg.canvas");
  const textColor = useColorModeValue("text.primary", "text.primary");
  const bodyColor = useColorModeValue("text.secondary", "text.secondary");
  const subtleColor = useColorModeValue("neutral.500", "neutral.300");
  const dividerColor = useColorModeValue("border.soft", "border.soft");
  const { t } = useLanguage();

  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  const ctaHover = { transform: "translateY(-2px)", boxShadow: "cardHover" };

  const quickLinks = [
    { icon: FaGithub, link: "https://github.com/rushabh-rajpara", label: "GitHub" },
    { icon: FaEnvelope, link: "mailto:rushabh4478@gmail.com", label: "Email" },
    { icon: FaGlobe, link: "https://rushabh-rajpara.github.io/Portfolio/", label: "Website" },
  ];

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
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45 }}
      overflow="hidden"
      px={{ base: 4, md: 8 }}
      pt={{ base: 24, md: 28 }}
      pb={{ base: 14, md: 20, lg: 24 }}
    >
      <VStack spacing={{ base: 5, md: 7 }} zIndex={1} width="100%" maxW="980px">
        <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
          <Image
            borderRadius="full"
            boxSize={{ base: "100px", sm: "120px", md: "150px" }}
            src={profile}
            alt="Rushabh Rajpara Profile"
            border="4px solid"
            borderColor="accent.primary"
            loading="lazy"
          />
        </motion.div>

        <Text fontSize={{ base: "xs", md: "sm" }} textTransform="uppercase" letterSpacing="0.12em" color={subtleColor} fontWeight="700">
          {t("hero.eyebrow")}
        </Text>

        <Heading fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }} fontWeight="800" color={textColor} lineHeight={{ base: "1.15", md: "1.08" }} maxW="920px">
          {t("hero.headline")}
        </Heading>

        <Text fontSize={{ base: "md", sm: "lg", md: "xl" }} fontWeight="medium" color={bodyColor} maxW="680px" lineHeight="1.75">
          {t("hero.subheadline")}
        </Text>

        <Text fontSize="sm" color={subtleColor} fontWeight="600">{t("hero.trustLine")}</Text>

        <Wrap justify="center" spacing={3}>
          <WrapItem><Badge colorScheme="brand" px={3} py={1.5} borderRadius="full">{t("hero.badge1")}</Badge></WrapItem>
          <WrapItem><Badge colorScheme="brand" px={3} py={1.5} borderRadius="full">{t("hero.badge2")}</Badge></WrapItem>
          <WrapItem><Badge colorScheme="brand" px={3} py={1.5} borderRadius="full">{t("hero.badge3")}</Badge></WrapItem>
        </Wrap>

        <HStack mt={2} spacing={4} flexDirection={{ base: "column", sm: "row" }} width={{ base: "100%", sm: "auto" }}>
          <Button bg="accent.primary" color="white" size="lg" as="a" href="#contact" width={{ base: "100%", sm: "auto" }} px={{ base: 8, md: 10 }} _hover={{ ...ctaHover, bg: "accent.hover" }}>
            {t("hero.ctaPrimary")}
          </Button>
          <Button
            size="md"
            variant="outline"
            borderWidth="2px"
            borderColor="accent.primary"
            color="accent.primary"
            as="a"
            href="#projects"
            width={{ base: "100%", sm: "auto" }}
            px={8}
            _hover={{ ...ctaHover, bg: "brand.50" }}
          >
            {t("hero.ctaSecondary")}
          </Button>
        </HStack>

        <Text fontSize="xs" color={subtleColor} fontWeight="600">
          {t("hero.ctaSupport")}
        </Text>

        <Divider borderColor={dividerColor} maxW="360px" />

        <HStack spacing={5} justify="center">
          {quickLinks.map(({ icon, link, label }) => (
            <Link key={label} href={link} target={link.startsWith("mailto:") ? undefined : "_blank"} rel={link.startsWith("mailto:") ? undefined : "noopener noreferrer"}>
              <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.2 }}>
                <HStack spacing={2} color={subtleColor} _hover={{ color: "accent.primary" }}>
                  {icon({ size: 18 })}
                  <Text fontSize="sm" fontWeight="600">{label}</Text>
                </HStack>
              </motion.div>
            </Link>
          ))}
        </HStack>
      </VStack>
    </MotionBox>
  );
};

export default Hero;
