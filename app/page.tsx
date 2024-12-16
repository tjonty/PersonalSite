"use client";

import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Navbar from "@/components/ui/FloatingNavbar";
import Section from "@/components/ui/Section";
import Skills from "@/components/Clients";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Section id="header">
          <Header />
        </Section>
        <Section id="about">
          <Grid />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="projects">
          <RecentProjects />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="approach">
          <Approach />
        </Section>
        <Section id="contact">
          <Footer />
        </Section>
      </div>
    </main>
  );
};

export default Home;
