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
});

export default theme;
