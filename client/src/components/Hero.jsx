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
import { useScroll, useTransform, useInView } from "framer-motion";
import profile from "../images/profile.jpg";
import { useLanguage } from "../context/LanguageContext";

const textVariant = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.025 },
  }),
};

const MotionBox = motion(Box);

const Hero = () => {
  const bg = useColorModeValue("white", "black");
  const textColor = useColorModeValue("black", "yellow.400");
  const bodyColor = useColorModeValue("gray.700", "gray.200");
  const subtleColor = useColorModeValue("gray.600", "gray.400");
  const dividerColor = useColorModeValue("blackAlpha.300", "whiteAlpha.300");
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  const ctaHover = { transform: "translateY(-2px)", boxShadow: "0 0 16px var(--accent-color)" };

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
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.3 }}
      overflow="hidden"
      style={{ scale, opacity }}
      px={{ base: 4, md: 8 }}
      pt={{ base: 24, md: 28 }}
      pb={{ base: 12, md: 14 }}
    >
      <VStack spacing={{ base: 5, md: 7 }} zIndex={1} width="100%" maxW="980px">
        <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
          <Image
            borderRadius="full"
            boxSize={{ base: "100px", sm: "120px", md: "150px" }}
            src={profile}
            alt="Rushabh Rajpara Profile"
            border="4px solid var(--accent-color)"
            loading="lazy"
          />
        </motion.div>

        <Text fontSize={{ base: "xs", md: "sm" }} textTransform="uppercase" letterSpacing="0.12em" color={subtleColor} fontWeight="700">
          {t("hero.eyebrow")}
        </Text>

        <Heading fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} fontWeight="bold" color={textColor} lineHeight="1.2" maxW="900px">
          {t("hero.headline").split("").map((char, i) => (
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

        <Text fontSize={{ base: "md", sm: "lg", md: "xl" }} fontWeight="medium" color={bodyColor} maxW="760px" lineHeight="1.8">
          {t("hero.subheadline")}
        </Text>

        <Text fontSize="sm" color={subtleColor} fontWeight="600">{t("hero.trustLine")}</Text>

        <Wrap justify="center" spacing={3}>
          <WrapItem><Badge colorScheme="yellow" px={3} py={1.5} borderRadius="full">{t("hero.badge1")}</Badge></WrapItem>
          <WrapItem><Badge colorScheme="yellow" px={3} py={1.5} borderRadius="full">{t("hero.badge2")}</Badge></WrapItem>
          <WrapItem><Badge colorScheme="yellow" px={3} py={1.5} borderRadius="full">{t("hero.badge3")}</Badge></WrapItem>
        </Wrap>

        <HStack spacing={4} flexDirection={{ base: "column", sm: "row" }} width={{ base: "100%", sm: "auto" }}>
          <Button colorScheme="yellow" background="#ffd700" color="black" size="lg" as="a" href="#contact" width={{ base: "100%", sm: "auto" }} px={8} _hover={{ ...ctaHover, bg: "#f0cb00" }}>
            {t("hero.ctaPrimary")}
          </Button>
          <Button
            colorScheme="yellow"
            size="lg"
            variant="outline"
            borderWidth="2px"
            as="a"
            href="#projects"
            width={{ base: "100%", sm: "auto" }}
            px={8}
            _hover={ctaHover}
          >
            {t("hero.ctaSecondary")}
          </Button>
        </HStack>

        <Divider borderColor={dividerColor} maxW="360px" />

        <HStack spacing={5} justify="center">
          {quickLinks.map(({ icon, link, label }) => (
            <Link key={label} href={link} target={link.startsWith("mailto:") ? undefined : "_blank"} rel={link.startsWith("mailto:") ? undefined : "noopener noreferrer"}>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                <HStack spacing={2} color={subtleColor} _hover={{ color: "var(--accent-color)" }}>
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
