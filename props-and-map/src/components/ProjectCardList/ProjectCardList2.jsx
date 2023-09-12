import ProjectCard from "../ProjectCard/ProjectCard";
import style from "./ProjectCardList.module.scss";
import { projects } from "../../data";

const ProjectCardList = () => {
  return (
    <div className={style.list}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          githubLink={project.githubLink}
          deployedLink={project.deployedLink}
        />
      ))}
    </div>
  );
};

export default ProjectCardList;
