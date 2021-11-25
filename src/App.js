import {Parallax, ParallaxLayer} from  "@react-spring/parallax"
import "../src/assets/styles/app.scss"
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Parallax pages={5} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={0.5}><Home /></ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}><About /></ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}><Skills /></ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5}><Projects /></ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.5}><Contact /></ParallaxLayer>
      </Parallax>

    </div>
  );
}

export default App;
