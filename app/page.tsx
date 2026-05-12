"use client";

import { PerspectiveProvider, usePerspective } from "@/context/PerspectiveContext";
import PerspectiveSelector from "@/components/PerspectiveSelector";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

function HomeContent() {
  const { data } = usePerspective();
  const navItems = data.navItems;

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Footer />
        <PerspectiveSelector />
      </div>
    </main>
  );
}

const Home = () => {
  return (
    <PerspectiveProvider>
      <HomeContent />
    </PerspectiveProvider>
  );
};

export default Home;
