import { Box } from "@chakra-ui/react";
import HireMeAboutResume from "../components/hireMe/HireMeAboutResume";
import HireMeContact from "../components/hireMe/HireMeContact";
import HireMeFooter from "../components/hireMe/HireMeFooter";
import HireMeHero from "../components/hireMe/HireMeHero";
import HireMeNavbar from "../components/hireMe/HireMeNavbar";
import HireMeProjects from "../components/hireMe/HireMeProjects";
import HireMeTechStack from "../components/hireMe/HireMeTechStack";

const HireMePage = () => (
  <Box
    bg="
      radial-gradient(circle at top left, rgba(87, 125, 214, 0.10) 0%, rgba(87, 125, 214, 0) 28%),
      radial-gradient(circle at 88% 22%, rgba(211, 227, 255, 0.72) 0%, rgba(211, 227, 255, 0) 20%),
      linear-gradient(180deg, #f7f8fb 0%, #f2f4f8 42%, #eef1f5 100%)
    "
  >
    <HireMeNavbar />
    <main>
      <HireMeHero />
      <HireMeProjects />
      <HireMeTechStack />
      <HireMeAboutResume />
      <HireMeContact />
    </main>
    <HireMeFooter />
  </Box>
);

export default HireMePage;
