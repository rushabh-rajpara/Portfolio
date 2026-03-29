import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Services from "../components/Services";
import TrustSignals from "../components/TrustSignals";
import PortfolioLayout from "../components/layout/PortfolioLayout";

const SharedPortfolioPage = () => (
  <PortfolioLayout>
    <Hero />
    <About />
    <Resume />
    <Projects />
    <Services />
    <TrustSignals />
    <Contact />
  </PortfolioLayout>
);

export default SharedPortfolioPage;
