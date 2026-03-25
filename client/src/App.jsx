import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import HowIWork from "./components/HowIWork";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Box as="main">
        <Hero />
        <Services />
        <Projects />
        <HowIWork />
        <About />
        <Capabilities />
        <Contact />
      </Box>
      <Footer />
    </>
  );
}

export default App;
