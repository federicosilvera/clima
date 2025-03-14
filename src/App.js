import '../src/styles/App.css';
import Navbar from './components/Navbar'
import WeatherPanel from './components/WeatherPanel';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <header>
        <Navbar/>
        <WeatherPanel/>
        <Home/>
      </header>
    </div>
  );
}

export default App;
