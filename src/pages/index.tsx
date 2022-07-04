import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Index() {
  return (
    <div className="flex justify-center items-center bg-light-gray">
      <div className="bg-background container shadow-xl">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
