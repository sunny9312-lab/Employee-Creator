import React from "react";
import style from "./ProjectCard.module.scss";

const ProjectCard = ({ project }) => {
  const { title, description, githubLink, deployedLink, techStack } = project;
  //using arrays
  const cardClasses = [style.card];
  if (techStack.find((tech) => tech === "React")) {
    cardClasses.push(style.grey__background);
  }
  return (
    <div className={cardClasses.join(" ")}>
      <h3>{title}</h3>
      <h2>{description}</h2>
      <h3>Tech Stack</h3>
      <ul>
        {techStack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className={style.list_wrapper}>
        <a href={githubLink}>Github Link</a>
        {deployedLink && <a href={deployedLink}>Deployed Link</a>}
      </div>
    </div>
  );
};

export default ProjectCard;
