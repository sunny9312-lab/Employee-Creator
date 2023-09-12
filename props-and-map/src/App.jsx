import ProjectCardList from "./components/ProjectCardList/ProjectCardList";
import "./App.css";
import projects from "./data.json";

function App() {
  console.log("projects", projects);
  return (
    <>
      <ProjectCardList projects={projects} />
    </>
  );
}

export default App;
