
import './App.css';
import Navbar from './components/Navbar';
import Footers from './components/Footer';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <footer>
        <Footers />
      </footer>
    </div>
  );
}

export default App;
