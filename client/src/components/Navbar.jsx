import { useMemo, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Link,
  IconButton,
  useColorMode,
  useColorModeValue,
  Text,
  Input,
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
  const navBg = useColorModeValue("white", "rgba(10, 10, 10, 0.9)");
  const navTextColor = useColorModeValue("black", "white");
  const colorPickerBorder = useColorModeValue("gray.300", "gray.600");
  const { language, setLanguage, t } = useLanguage();

  const defaultAccentColor = useColorModeValue("#007bff", "#ffcc00");

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
  const [accentColor, setAccentColor] = useState(
    localStorage.getItem("accentColor") || defaultAccentColor,
  );

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("accentColor", accentColor);
    document.documentElement.style.setProperty("--accent-color", accentColor);
  }, [accentColor]);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop - 100;
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
      const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;
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
        boxShadow="md"
        p={4}
        zIndex="10000"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
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
                position="relative"
                _hover={{ color: "var(--accent-color)" }}
                transition="0.3s"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              as="a"
              href="#contact"
              size="xs"
              colorScheme="yellow"
              background="#ffd700"
              color={navTextColor}
              _hover={{ color: "var(--accent-color)", bg: "#ffd700" }}
              onClick={(e) => handleSmoothScroll(e, "#contact")}
            >
              {t("nav.startProject")}
            </Button>
          </Flex>

          <IconButton aria-label="Open Menu" icon={<FaBars />} display={{ base: "flex", md: "none" }} onClick={() => setIsOpen(true)} />

          <Flex align="center" gap={4} display={{ base: "none", md: "flex" }}>
            <HStack spacing={2}>
              <Button size="xs" variant="ghost" color={language === "en" ? "var(--accent-color)" : navTextColor} onClick={() => setLanguage("en")}>EN</Button>
              <Text fontSize="xs" color={navTextColor}>|</Text>
              <Button size="xs" variant="ghost" color={language === "fr" ? "var(--accent-color)" : navTextColor} onClick={() => setLanguage("fr")}>FR</Button>
            </HStack>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.3 }}>
              <IconButton
                onClick={toggleColorMode}
                icon={<Icon as={colorMode === "light" ? FaMoon : FaSun} />}
                aria-label="Toggle Dark Mode"
                color={navTextColor}
                bg="transparent"
                _hover={{ color: "var(--accent-color)" }}
              />
            </motion.div>

            <Input
              type="color"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              w="9"
              h="9"
              cursor="pointer"
              border="1px solid"
              borderColor={colorPickerBorder}
              borderRadius="full"
              p="0"
              bg="transparent"
              sx={{
                "::-webkit-color-swatch-wrapper": { padding: 0, borderRadius: "9999px" },
                "::-webkit-color-swatch": { border: "none", borderRadius: "9999px" },
                "::-moz-color-swatch": { border: "none", borderRadius: "9999px" },
              }}
            />
          </Flex>
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

                <Button as="a" href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} colorScheme="yellow" background="#ffd700" size="sm" _hover={{ color: "var(--accent-color)", bg: "#ffd700" }}>
                  {t("nav.startProject")}
                </Button>

                <HStack spacing={2}>
                  <Button size="sm" variant="ghost" color={language === "en" ? "var(--accent-color)" : navTextColor} onClick={() => setLanguage("en")}>EN</Button>
                  <Text fontSize="sm" color={navTextColor}>|</Text>
                  <Button size="sm" variant="ghost" color={language === "fr" ? "var(--accent-color)" : navTextColor} onClick={() => setLanguage("fr")}>FR</Button>
                </HStack>

                <HStack spacing={4} mt={6}>
                  <IconButton
                    onClick={toggleColorMode}
                    icon={<Icon as={colorMode === "light" ? FaMoon : FaSun} />}
                    aria-label="Toggle Dark Mode"
                    color={navTextColor}
                    bg="transparent"
                    _hover={{ color: "var(--accent-color)" }}
                  />

                  <Input
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    w="10"
                    h="10"
                    cursor="pointer"
                    border="1px solid"
                    borderColor={colorPickerBorder}
                    borderRadius="full"
                    p="0"
                    bg="transparent"
                    sx={{
                      "::-webkit-color-swatch-wrapper": { padding: 0, borderRadius: "9999px" },
                      "::-webkit-color-swatch": { border: "none", borderRadius: "9999px" },
                      "::-moz-color-swatch": { border: "none", borderRadius: "9999px" },
                    }}
                  />
                </HStack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </MotionBox>
    </AnimatePresence>
  );
};

export default Navbar;
