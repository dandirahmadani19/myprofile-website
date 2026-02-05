import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Articles from "@/components/sections/Articles";
import GitHubRepos from "@/components/sections/GitHubRepos";
import Education from "@/components/sections/Education";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Articles />
        <GitHubRepos />
        <Education />
      </main>
      <Footer />
    </>
  );
}
