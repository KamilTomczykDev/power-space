import About from "../features/homepage/About";
import Header from "../features/homepage/Header";
import Sponsors from "../features/homepage/Sponsors";
import Navbar from "../features/homepage/Navbar";
import Pricing from "../features/homepage/Pricing";
import Faq from "../features/homepage/Faq";
import CallToAction from "../features/homepage/CallToAction";
import Contact from "../features/homepage/Contact";
import Footer from "../features/homepage/Footer";

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
