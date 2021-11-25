import '../assets/styles/home.scss'

const About = () => {
  return (
    <div className='home_about'>
      <h1>About</h1>
      <p>I'm a Civil Engineer passionate about technology and web development.</p>
      <h3>My hobbies:</h3>
      <div className='home_about_hobbies'>
        <p className='hobbie'>🎮</p>
        <span className='hobbie'>🏃</span>
        <span className='hobbie'>🏊🏽</span>
        <span className='hobbie'>☕</span>
        <span className='hobbie'>🐕</span>
      </div>
    </div>
  )
}

export default About