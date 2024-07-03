import './App.css';
import Contact from './components/Contact';
import MyNavbar from './components/NavBar/NavBar';
import Projects from './components/Projects';
import Home from './components/Home';
import About from './components/About';
function App() {
  return (
    <div className="container mt-5">
      <div className='components'>
        <MyNavbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
