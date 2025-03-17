import '../src/styles/App.css';
import Navbar from './components/Navbar'
import WeatherPanel from './components/WeatherPanel';

function App() {
  return (
    <div>
      <header>
        <Navbar/>
        <WeatherPanel/>
      </header>
    </div>
  );
}

export default App;
