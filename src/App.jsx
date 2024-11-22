import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Landing from './pages/landing/Landing';
import SeaSimulationTester from './pages/test/SeaSimulationTester'; 
import TestSchoolFish from './pages/test/TestSchoolFish'; 
import DoryTest from './pages/test/DoryTest';



function App() {
  return (
    <Router future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/seasimulation" element={<SeaSimulationTester />} /> {/* Nueva ruta */}
        <Route path="/testfish" element={<TestSchoolFish />}/>
        <Route path="/testdory" element={<DoryTest />}/>
      </Routes>
    </Router>
  );
}

export default App;