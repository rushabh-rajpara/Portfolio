import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Montserrat', sans-serif",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "black" : "#ffc800bd",
        color: props.colorMode === "dark" ? "yellow.400" : "black",
        letterSpacing: "0.01em",
      },
      "::selection": {
        background: "var(--accent-color)",
        color: "#111",
      },
    }),
  },
  colors: {
    primary: {
      dark: "#000000",
      light: "#FFFFFF",
    },
    accent: {
      dark: "#ffda00",
      light: "#ffda00",
    },
  },
  radii: {
    md: "12px",
    lg: "16px",
  },
  shadows: {
    card: "0 12px 35px rgba(0, 0, 0, 0.2)",
    cardHover: "0 14px 40px rgba(0, 0, 0, 0.26)",
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
