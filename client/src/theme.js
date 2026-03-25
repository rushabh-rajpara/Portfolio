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
      primary: "#1f4ed8",
      primaryHover: "#1d43b8",
      ink: "#0f172a",
      muted: "#475569",
      surface: "#f8fafc",
      surfaceAlt: "#f1f5f9",
      border: "#dbe3ee",
      borderStrong: "#94a3b8",
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.surface",
        color: "brand.ink",
      },
      "*::placeholder": {
        color: "gray.500",
      },
      a: {
        color: "brand.primary",
      },
    },
  },
});

export default theme;
