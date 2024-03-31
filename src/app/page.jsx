"use client";

import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/Projects";
import Welcome from "@/components/Welcome/Welcome";
import Image from "next/image";

export default function Home() {

  return (
    <MaxWidthWrapper>
      <main className="flex flex-col">
        <Welcome />
        <About />
        <Projects />
        <Contact />
      </main>
    </MaxWidthWrapper>
  );
}
