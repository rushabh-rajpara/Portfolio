import { Box, Button, Container } from "@chakra-ui/react";
import { HiArrowLeft } from "react-icons/hi";
import HireMeFooter from "../components/hireMe/HireMeFooter";
import HireMeNavbar from "../components/hireMe/HireMeNavbar";
import HireMeProjects from "../components/hireMe/HireMeProjects";
import { hireMeProjects } from "../content/hireMeContent";
import { navigateWithinApp } from "../utils/navigation";

const HireMeProjectsPage = () => {
  const devPath = `${import.meta.env.BASE_URL}dev`;

  return (
    <Box
      bg="
        radial-gradient(circle at top left, rgba(87, 125, 214, 0.10) 0%, rgba(87, 125, 214, 0) 28%),
        radial-gradient(circle at 88% 22%, rgba(211, 227, 255, 0.72) 0%, rgba(211, 227, 255, 0) 20%),
        linear-gradient(180deg, #f7f8fb 0%, #f2f4f8 42%, #eef1f5 100%)
      "
    >
      <HireMeNavbar isProjectsPage />
      <main>
        <Container maxW="1340px" px={{ base: 5, md: 7 }} pt={{ base: 8, md: 10 }}>
          <Button
            as="a"
            href={`${devPath}#projects`}
            onClick={(event) => {
              event.preventDefault();
              navigateWithinApp(`${devPath}#projects`);
            }}
            variant="ghost"
            leftIcon={<HiArrowLeft />}
            px={0}
            color="#506176"
            _hover={{ bg: "transparent", color: "#1f4294" }}
          >
            Back to Featured Projects
          </Button>
        </Container>

        <HireMeProjects
          projects={hireMeProjects}
          eyebrow="Project Archive"
          title="All Projects"
          description="A broader view of product, operations, CRM, AI, and commerce work across web, backend, and mobile systems."
          showAllLink={false}
          sectionPy={{ base: 10, md: 12, lg: 14 }}
          sectionSpacing={{ base: 8, md: 9 }}
          revealOnMount
        />
      </main>
      <HireMeFooter />
    </Box>
  );
};

export default HireMeProjectsPage;
