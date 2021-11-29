import "../src/assets/styles/app.scss"
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="App">
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact />

    </div>
  );
}

export default App;
