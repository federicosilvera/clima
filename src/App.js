import '../src/styles/App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';

function App() {
  return (
    <div>
      <header>
        <Navbar/>
        <Home/>
      </header>
    </div>
  );
}

export default App;
