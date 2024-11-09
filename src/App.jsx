import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Landing from './pages/landing/Landing';
import SeaSimulationTester from './pages/test/SeaSimulationTester'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sea-simulation-tester" element={<SeaSimulationTester />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;