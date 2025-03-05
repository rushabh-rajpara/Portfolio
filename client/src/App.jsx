import { Box } from "@chakra-ui/react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import InteractiveLines from "./components/InteractiveLines";
import CustomCursor from "./components/CustomCursor";
import CursorTrail from "./components/CursorTrail";
import Resume from "./components/Resume";
import Projects from "./components/Projects";


if (process.env.NODE_ENV === "production") {
  if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};
  }
}


function App() {
  return (
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <InteractiveLines /> {/* Background Animation */}
    <CustomCursor />
    <CursorTrail />
    <Navbar />
    <Hero />
    <About />
    <Resume />
    <Projects />
    <Services />
    <Contact />
    
  </ChakraProvider>
  );
}

export default App;
