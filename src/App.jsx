import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Landing from './pages/landing/Landing';
import SeaSimulationTester from './pages/test/SeaSimulationTester'; 
import TestSchoolFish from './pages/test/TestSchoolFish'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/seasimulation" element={<SeaSimulationTester />} /> {/* Nueva ruta */}
        <Route path="/testfish" element={<TestSchoolFish />}/>
      </Routes>
    </Router>
  );
}

export default App;