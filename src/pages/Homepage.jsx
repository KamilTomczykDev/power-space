import About from "../components/features/homepage/About";
import Header from "../components/features/homepage/Header";
import Sponsors from "../components/features/homepage/Sponsors";
import Navbar from "../components/features/homepage/Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <Header />
      <Sponsors />
      <About />
    </>
  );
}

export default Homepage;
