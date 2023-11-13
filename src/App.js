import './App.css';
import Navbar from "./components/nav_bar/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Education from "./components/Education/education";
import Contact from "./components/Contact/contact";
import Edu from './components/Education/edu';
import Timeline from './components/Education/timeline';
import PortFolio from './components/Works/portfolio';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Timeline/>
      <PortFolio/>
      <Contact/>
    </div>
  );
}

export default App;
