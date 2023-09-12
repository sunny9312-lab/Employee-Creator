import ProjectCard from "../ProjectCard/ProjectCard";
import style from "./ProjectCardList.module.scss";

const ProjectCardList = () => {
  const projects = [
    {
      title: "Portfolio1",
      description: "All about me1",
      githubLink: "https://github.com",
      deployedLink: "https://netlify.com",
    },
    {
      title: "Portfolio2",
      description: "All about me2",
      githubLink: "https://github.com",
      deployedLink: "https://netlify.com",
    },
    {
      title: "Portfolio3",
      description: "All about me3",
      githubLink: "https://github.com",
      deployedLink: "https://netlify.com",
    },
  ];

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
