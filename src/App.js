
import './App.css';
import Navbar from './components/Navbar';
import Footers from './components/Footer';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Home />
      <footer>
        <Footers />
      </footer>
    </div>
  );
}

export default App;
