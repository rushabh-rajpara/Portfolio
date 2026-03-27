import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import TrustSignals from "./components/TrustSignals";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

if (import.meta.env.PROD) {
  if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};
  }
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LanguageProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Navbar />
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Services />
        <TrustSignals />
        <Contact />
        <Footer />
      </LanguageProvider>
    </ChakraProvider>
  );
}

export default App;
