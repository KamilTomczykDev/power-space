import About from "../components/features/homepage/About";
import Header from "../components/features/homepage/Header";
import Logos from "../components/features/homepage/Logos";
import Navbar from "../components/features/homepage/Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <Header />
      <Logos />
      <About />
    </>
  );
}

export default Homepage;
