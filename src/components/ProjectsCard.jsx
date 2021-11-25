import '../assets/styles/home.scss'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons';


const ProjectsCard = (props) => {
  const project = props.project;
  
  return (
    <div className="projects_card">
      <img className="project_img"src={project.image} alt={project.name} ></img>
      <div className="project_info">
        <h3 className="project_name">{project.name}</h3>
        <p className="project_description">{project.description}</p>
        <div className="project_links">
          <a href={project.url} target="blank"><FontAwesomeIcon icon={faLink}/></a>
          <a href={project.github} target="blank"><FontAwesomeIcon icon={faGithub}/></a>
          {project.youtube ? 
          <a href={project.youtube} target="blank"><FontAwesomeIcon icon={faYoutube}/></a> 
          : null}
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard;