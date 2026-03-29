import Navbar from "../Navbar";
import Footer from "../Footer";

const PortfolioLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default PortfolioLayout;
