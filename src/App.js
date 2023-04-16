
import './App.css';
import Navbar from './components/Navbar';
import Footers from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <footer>
          <Footers />
        </footer>
      </div>
    </Router>
  );
}

export default App;
