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
      dark: "#000000", // Black for dark mode
      light: "#FFFFFF", // Soft white for light mode
    },
    accent: {
      dark: "#ffda00", // Yellow for dark mode
      light: "#ffda00", // Yellow remains the same in both modes
    },}
});

export default theme;
