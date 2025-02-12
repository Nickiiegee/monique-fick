import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import ExperienceToggle from "@/components/experience/ExperienceToggle";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import Testimonials from "@/components/testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <ExperienceToggle />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
