import '../assets/styles/home.scss'
import SkillsCard from "./SkillsCard"
import skillsData from '../assets/data/skillsData'

const Skills = () => {
  return (
    <div className="skills_container">
      <h1 className="skills_title">Skills</h1>
    <div className="skills">
      {skillsData.map(skill => (
        <SkillsCard skill={skill} key={skill.name} />
      ))}
    </div>
    </div>
  )
}

export default Skills