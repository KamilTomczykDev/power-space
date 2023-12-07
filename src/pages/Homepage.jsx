import About from "../components/features/homepage/About";
import Header from "../components/features/homepage/Header";
import Sponsors from "../components/features/homepage/Sponsors";
import Navbar from "../components/features/homepage/Navbar";
import Pricing from "../components/features/homepage/Pricing";
import Faq from "../components/features/homepage/Faq";
import CallToAction from "../components/features/homepage/CallToAction";
import Contact from "../components/features/homepage/Contact";
import Footer from "../components/features/homepage/Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <Header />
      <Sponsors />
      <About />
      <Pricing />
      <Faq />
      <CallToAction />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
