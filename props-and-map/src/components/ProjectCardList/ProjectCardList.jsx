import ProjectCard from "../ProjectCard/ProjectCard";
import style from "./ProjectCardList.module.scss";

const ProjectCardList = ({ projects }) => {
  return (
    <div className={style.list}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectCardList;
