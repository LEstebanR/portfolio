import { Player, Controls } from '@lottiefiles/react-lottie-player';
import "../src/assets/styles/app.scss"

const animation= "https://assets9.lottiefiles.com/private_files/lf30_y9czxcb9.json"

function App() {
  return (
    <div className="App">
      <Player autoplay loop src={animation} style={{ height: '50%', width: '50%' }}></Player>
    </div>
  );
}

export default App;
