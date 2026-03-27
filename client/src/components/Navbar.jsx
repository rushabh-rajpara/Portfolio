import { useMemo, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Link,
  IconButton,
  useColorMode,
  useColorModeValue,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const MotionBox = motion(Box);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue("rgba(255, 255, 255, 0.95)", "rgba(10, 10, 10, 0.92)");
  const navTextColor = useColorModeValue("black", "white");
  const { language, setLanguage, t } = useLanguage();

  const navLinks = useMemo(
    () => [
      { name: t("nav.home"), href: "#home" },
      { name: t("nav.about"), href: "#about" },
      { name: t("nav.process"), href: "#resume" },
      { name: t("nav.caseStudies"), href: "#projects" },
      { name: t("nav.services"), href: "#services" },
      { name: t("nav.contact"), href: "#contact" },
    ],
    [t],
  );

  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent-color", "#ffd700");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop - 120;
          if (window.scrollY >= sectionTop) {
            currentSection = link.href.substring(1);
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - 78;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      <MotionBox
        key={colorMode}
        position="fixed"
        top="0"
        left="0"
        w="100%"
        bg={navBg}
        boxShadow="sm"
        backdropFilter="blur(8px)"
        p={4}
        zIndex="10000"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35 }}
      >
        <Flex align="center" maxW="1200px" mx="auto" justify="space-between">
          <Link
            href="#home"
            fontSize="2xl"
            fontWeight="bold"
            color={navTextColor}
            _hover={{ color: "var(--accent-color)", textDecoration: "none" }}
            onClick={(e) => handleSmoothScroll(e, "#home")}
          >
            Rushabh
          </Link>

          <Flex gap={7} align="center" display={{ base: "none", md: "flex" }}>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                fontSize="xs"
                color={activeSection === link.href.substring(1) ? "var(--accent-color)" : navTextColor}
                fontWeight={activeSection === link.href.substring(1) ? "700" : "500"}
                _hover={{ color: "var(--accent-color)" }}
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              as="a"
              href="#contact"
              size="sm"
              colorScheme="yellow"
              background="#ffd700"
              color="black"
              px={5}
              _hover={{ bg: "#f0cb00", transform: "translateY(-1px)" }}
              onClick={(e) => handleSmoothScroll(e, "#contact")}
            >
              {t("nav.startProject")}
            </Button>
          </Flex>

          <HStack spacing={2} display={{ base: "none", md: "flex" }}>
            <Button size="xs" variant="ghost" color={language === "en" ? "var(--accent-color)" : navTextColor} onClick={() => setLanguage("en")}>EN</Button>
            <Text fontSize="xs" color={navTextColor}>|</Text>
            <Button size="xs" variant="ghost" color={language === "fr" ? "var(--accent-color)" : navTextColor} onClick={() => setLanguage("fr")}>FR</Button>
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
              <IconButton
                onClick={toggleColorMode}
                icon={<Icon as={colorMode === "light" ? FaMoon : FaSun} />}
                aria-label="Toggle Dark Mode"
                color={navTextColor}
                bg="transparent"
                _hover={{ color: "var(--accent-color)" }}
              />
            </motion.div>
          </HStack>

          <IconButton aria-label="Open Menu" icon={<FaBars />} display={{ base: "flex", md: "none" }} onClick={() => setIsOpen(true)} />
        </Flex>

        <Drawer isOpen={isOpen} placement="right" onClose={() => setIsOpen(false)}>
          <DrawerOverlay />
          <DrawerContent bg={navBg}>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack spacing={6} mt={10} align="center">
                {navLinks.map((link, index) => (
                  <Link key={index} href={link.href} fontSize="lg" color={navTextColor} _hover={{ color: "var(--accent-color)" }} onClick={(e) => handleSmoothScroll(e, link.href)}>
                    {link.name}
                  </Link>
                ))}

                <Button as="a" href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} colorScheme="yellow" background="#ffd700" color="black" size="md" w="full" maxW="260px" _hover={{ bg: "#f0cb00" }}>
                  {t("nav.startProject")}
                </Button>

                <HStack spacing={2}>
                  <Button size="sm" variant="ghost" color={language === "en" ? "var(--accent-color)" : navTextColor} onClick={() => setLanguage("en")}>EN</Button>
                  <Text fontSize="sm" color={navTextColor}>|</Text>
                  <Button size="sm" variant="ghost" color={language === "fr" ? "var(--accent-color)" : navTextColor} onClick={() => setLanguage("fr")}>FR</Button>
                </HStack>

                <IconButton
                  onClick={toggleColorMode}
                  icon={<Icon as={colorMode === "light" ? FaMoon : FaSun} />}
                  aria-label="Toggle Dark Mode"
                  color={navTextColor}
                  bg="transparent"
                  _hover={{ color: "var(--accent-color)" }}
                />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </MotionBox>
    </AnimatePresence>
  );
};

export default Navbar;
