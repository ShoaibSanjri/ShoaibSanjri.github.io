import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AboutPage from './Components/About';
import Home from './Components/Home';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutPage />
      <Skills />
    </div>
  );
}

export default App;
