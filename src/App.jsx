import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Landing from './pages/landing/Landing';
import SeaSimulationTester from './pages/test/SeaSimulationTester'; 
import TestSchoolFish from './pages/test/TestSchoolFish'; 
import DoryTest from './pages/test/DoryTest';
import Quiz from './pages/quiz/Quiz';
import Lobby from './pages/lobby/Lobby'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/seasimulation" element={<SeaSimulationTester />} /> {/* Nueva ruta */}
      <Route path="/testfish" element={<TestSchoolFish />}/>
      <Route path="/testdory" element={<DoryTest />}/>
      <Route path="/quiz" element={<Quiz/>} />
      <Route path="/lobby" element={<Lobby />} /> {/* Nueva ruta */}

    </Routes>
  );
}

export default App;
