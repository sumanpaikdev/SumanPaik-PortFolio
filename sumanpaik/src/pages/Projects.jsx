import React from "react";
import ProjectData from "../Data/Projects.json"
import ProjectItem from "../components/ProjectItem";

function Projects() {

    const prjItem = ProjectData.map(item => {
        return(
            <ProjectItem item={item} key={item.id}/>
        )
    })
  return (
    <div className="projects-container-page">
      <section className="project-section" id="project-section">
        {prjItem}
      </section>
    </div>
  );
}
export default Projects;
