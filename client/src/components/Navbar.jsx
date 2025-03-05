import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Link,
  Spacer,
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
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

// Navigation links
const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "RESUME", href: "#resume" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SERVICE", href: "#services" },
  { name: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue("white", "rgba(10, 10, 10, 0.9)");
  const navTextColor = useColorModeValue("black", "white");

  const defaultAccentColor = useColorModeValue("#007bff", "#ffcc00");

  const [activeSection, setActiveSection] = useState("home");
  const [accentColor, setAccentColor] = useState(
    localStorage.getItem("accentColor") || defaultAccentColor
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
  }, []);

  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
    setIsOpen(false); // Close menu on click (for mobile)
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
          {/* Logo */}
          <Text fontSize="2xl" fontWeight="bold" color={navTextColor}>
            Rushabh
          </Text>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <Flex gap={9} display={{ base: "none", md: "flex" }}>
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
          </Flex>

          {/* Mobile Menu Button (Hidden on Desktop) */}
          <IconButton
            aria-label="Open Menu"
            icon={<FaBars />}
            display={{ base: "flex", md: "none" }}
            onClick={() => setIsOpen(true)}
          />

          {/* Theme Customization & Dark Mode Toggle (Desktop Only) */}
          <Flex align="center" gap={4} display={{ base: "none", md: "flex" }}>
            <Text fontSize="lg" fontWeight="bold" color={navTextColor}>
              ENG
            </Text>

            {/* Accent Color Picker */}
            <Input
              type="color"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              w="10"
              h="10"
              cursor="pointer"
              border="none"
              p="1"
              bg="transparent"
            />

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <IconButton
                onClick={toggleColorMode}
                icon={<Icon as={colorMode === "light" ? FaMoon : FaSun} />}
                aria-label="Toggle Dark Mode"
                color={navTextColor}
                bg="transparent"
                _hover={{ color: "var(--accent-color)" }}
              />
            </motion.div>
          </Flex>
        </Flex>

        {/* Mobile Menu (Drawer) */}
        <Drawer isOpen={isOpen} placement="right" onClose={() => setIsOpen(false)}>
          <DrawerOverlay />
          <DrawerContent bg={navBg}>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack spacing={6} mt={10} align="center">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    fontSize="lg"
                    color={navTextColor}
                    _hover={{ color: "var(--accent-color)" }}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Dark Mode & Accent Picker (Now inside Mobile Menu) */}
                <HStack spacing={4} mt={6}>
                  {/* Accent Color Picker */}
                  <Input
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    w="10"
                    h="10"
                    cursor="pointer"
                    border="none"
                    p="1"
                    bg="transparent"
                  />

                  {/* Dark Mode Toggle */}
                  <IconButton
                    onClick={toggleColorMode}
                    icon={<Icon as={colorMode === "light" ? FaMoon : FaSun} />}
                    aria-label="Toggle Dark Mode"
                    color={navTextColor}
                    bg="transparent"
                    _hover={{ color: "var(--accent-color)" }}
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
