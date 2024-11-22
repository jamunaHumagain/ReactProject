import React from "react";
import { Styles } from "../utils/Style";
import { projects } from "../Constants";
import Tilt from "react-parallax-tilt";
import { SiGithub } from "react-icons/si";

const Projects = () => {
  return (
    <div>
      <div
        className="flex-row items-center pl-5 justify-center pt-3"
        id="Projects"
      >
        <span className={Styles.sectionHeadText}>Projects</span>
        <hr className="w-[35%]"></hr>
        <div className={Styles.sectionText}>
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </div>
      </div>

      <div className="flex flex-wrap p-8 justify-evenly items-center">
        {projects.map((project) => (
          <Tilt key={project.name}>
            <div className="w-[300px] h-[500px] flex flex-col shadow-2xl m-10 items-center rounded-xl border-2 border-violet-900 p-3">
              <div className="flex justify-center mb-3">
                <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center">
                  <a href={project.source_code_link} target="blank">
                    <SiGithub className="text-3xl font-bold text-violet-600" />
                  </a>
                </div>
              </div>
              <img
                src={project.image}
                alt={project.name}
                className="h-[200px] w-[300px] object-cover m-0 mb-3 rounded-2xl border-2 border-pink-200"
              />

              <div className="w-full text-center">
                <div className="text-2xl text-violet-600 font-extrabold">
                  {project.name}
                </div>
                <div className="text-orange-500">{project.description}</div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Projects;
