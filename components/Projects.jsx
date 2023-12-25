import Image from "next/image";
import Link from "next/link";
import React from "react";
import Julie from "../public/assets/projects/julie.png";
import netflixImg from "../public/assets/projects/netflix.png";
import nikeImg from "../public/assets/projects/nike.png";
import docsImg from "../public/assets/projects/docs.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="Next JS"
            username="test@gmail.com"
            password="test123"
            liveUrl="https://netflix-clone-nine-azure.vercel.app/"
            GithubUrl="https://github.com/mahesh9932/netflix-clone"
          />
          <ProjectItem
            title="Docs"
            backgroundImg={docsImg}
            projectUrl="/docs"
            tech="React JS / Node JS"
            liveUrl="https://docs-clone-one.vercel.app/"
            GithubUrl="https://github.com/mahesh9932/docs-clone"
            username="test@gmail.com"
            password="Test@123"
            username2="test2@gmail.com"
            password2="Test@123"
          />
          <ProjectItem
            title="Threat Analyzer"
            backgroundImg={Julie}
            projectUrl="/julie"
            tech="React JS"
            liveUrl="https:lab.julies.io"
          />

          <ProjectItem
            title="Nike Landing"
            backgroundImg={nikeImg}
            projectUrl="/nike"
            tech="React JS"
            liveUrl="https://nike-landing-page-nine.vercel.app/"
            GithubUrl="https://github.com/mahesh9932/nike"
          />
          {/* <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
