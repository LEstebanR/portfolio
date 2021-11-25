import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact">
      <h1>You can find me here:</h1>
      <div className="contact_links">
        <a href="mailto:leramirezca@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
        <a href="https://github.com/LEstebanR" target="blank"><FontAwesomeIcon icon={faGithub}/></a>
        <a href="https://www.linkedin.com/in/lestebanr/" target="blank"><FontAwesomeIcon icon={faLinkedin}/></a>
      </div>
    </div>
  )
}

export default Contact