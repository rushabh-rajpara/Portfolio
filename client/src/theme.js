import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Montserrat', sans-serif",
  },
  colors: {
    brand: {
      50: "#eef3f8",
      100: "#d8e4f0",
      200: "#b7cce0",
      300: "#8faec9",
      400: "#5f84aa",
      500: "#44688d",
      600: "#365572",
      700: "#2e4860",
      800: "#263b4f",
      900: "#1f2f3f",
    },
    neutral: {
      50: "#f7f8fa",
      100: "#edf0f3",
      200: "#d6dde5",
      300: "#b7c1cc",
      400: "#8a96a3",
      500: "#667180",
      600: "#4a5563",
      700: "#36404c",
      800: "#242c36",
      900: "#161c24",
    },
  },
  semanticTokens: {
    colors: {
      "bg.canvas": { default: "neutral.50", _dark: "neutral.900" },
      "bg.surface": { default: "white", _dark: "neutral.800" },
      "text.primary": { default: "neutral.900", _dark: "neutral.50" },
      "text.secondary": { default: "neutral.600", _dark: "neutral.300" },
      "border.soft": { default: "neutral.200", _dark: "whiteAlpha.300" },
      "accent.primary": { default: "brand.700", _dark: "brand.300" },
      "accent.hover": { default: "brand.800", _dark: "brand.200" },
      "state.success": { default: "green.600", _dark: "green.300" },
      "state.error": { default: "red.600", _dark: "red.300" },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "neutral.900" : "neutral.50",
        color: props.colorMode === "dark" ? "neutral.50" : "neutral.900",
        letterSpacing: "0.01em",
      },
      "::selection": {
        background: "brand.200",
        color: "#101418",
      },
    }),
  },
  radii: {
    md: "12px",
    lg: "16px",
  },
  shadows: {
    card: "0 8px 26px rgba(15, 23, 42, 0.08)",
    cardHover: "0 14px 30px rgba(15, 23, 42, 0.14)",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "12px",
        fontWeight: "700",
        transition: "all 0.22s ease",
      },
      sizes: {
        md: {
          h: "44px",
          px: 6,
        },
        lg: {
          h: "50px",
          px: 8,
        },
      },
    },
    Link: {
      baseStyle: {
        transition: "color 0.22s ease",
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: "12px",
        },
      },
    },
    Textarea: {
      baseStyle: {
        borderRadius: "12px",
      },
    },
  },
});

export default theme;
