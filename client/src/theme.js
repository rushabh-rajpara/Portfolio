import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Sora', sans-serif",
    body: "'Manrope', sans-serif",
  },
  colors: {
    brand: {
      50: "#eef3ff",
      100: "#dde8ff",
      200: "#aec5ff",
      300: "#7899ef",
      400: "#5476d6",
      500: "#3559bb",
      600: "#1f4294",
      700: "#102b75",
      800: "#0b1f58",
      900: "#08163f",
    },
    neutral: {
      50: "#f3f4f6",
      100: "#e5e7eb",
      200: "#d1d5db",
      300: "#9ca3af",
      400: "#6b7280",
      500: "#4b5563",
      600: "#374151",
      700: "#1f2937",
      800: "#172033",
      900: "#0f172a",
    },
  },
  semanticTokens: {
    colors: {
      "bg.canvas": { default: "#eef0f4", _dark: "neutral.900" },
      "bg.alt": { default: "#f6f8fb", _dark: "#151f31" },
      "bg.tint": { default: "#e8edf5", _dark: "#111a2a" },
      "bg.surface": { default: "#ffffff", _dark: "#1a2437" },
      "bg.surfaceMuted": { default: "#f6f8fc", _dark: "#202c42" },
      "text.primary": { default: "brand.700", _dark: "neutral.50" },
      "text.secondary": { default: "neutral.500", _dark: "neutral.300" },
      "text.muted": { default: "neutral.400", _dark: "neutral.400" },
      "border.soft": { default: "#d6dbe4", _dark: "rgba(255, 255, 255, 0.12)" },
      "accent.primary": { default: "brand.600", _dark: "brand.300" },
      "accent.hover": { default: "brand.500", _dark: "brand.200" },
      "state.success": { default: "green.600", _dark: "green.300" },
      "state.error": { default: "red.600", _dark: "red.300" },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "neutral.900" : "#eef0f4",
        color: props.colorMode === "dark" ? "neutral.50" : "brand.700",
        letterSpacing: "-0.01em",
      },
      "::selection": {
        background: "brand.200",
        color: "#101418",
      },
    }),
  },
  radii: {
    md: "12px",
    lg: "18px",
    xl: "24px",
  },
  shadows: {
    card: "0 10px 24px rgba(15, 23, 42, 0.10)",
    cardHover: "0 16px 34px rgba(15, 23, 42, 0.16)",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "10px",
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
