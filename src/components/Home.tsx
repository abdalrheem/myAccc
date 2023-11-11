import React from "react";
import AboutUSSecion from "./AboutUSSecion";
import Navbar from "./Navbar";
import Services from "./ProjectsSection";
import "bootstrap/dist/css/bootstrap.css";
import ServicesSection from "./ServicesSection";
import ProjectsSection from "./ProjectsSection";
import Footer from "./Footer";
import Partners from "./Partners";

const Home = () => {
  return (
    <>
      <Navbar />
      <AboutUSSecion />
      <ServicesSection />
      <Partners />
      <ProjectsSection />
      <Footer />
    </>
  );
};

export default Home;
