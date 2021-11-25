import '../assets/styles/home.scss'

const SkillsCard = (props) => {
  const skill = props.skill
  return (
    <div className="skill_card">
      <img className="skill_logo" src={skill.icon} alt={skill.name}/>
    </div>
  )
}

export default SkillsCard;