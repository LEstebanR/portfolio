import projectsData from "../assets/data/projectsData"
import ProjectsCard from "./ProjectsCard"

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects_cards">
      {projectsData.map(project => {
        return(
        <ProjectsCard project={project} key={project.name}/>
        )
      })}
      </div>

    </div>
  )
}

export default Projects