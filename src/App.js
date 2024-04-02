import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import Timeline from "./components/timeline/Timeline";
import ServicesSection from "./components/services/Services";
import AboutPage from "./components/about/AboutPage";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Hero/>
        <Features />
        <Projects />
        <Resume />
        <AboutPage/>
        <Testimonial />
        <Timeline/>
        <Contact />
        <ServicesSection/>
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
