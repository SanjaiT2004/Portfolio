// src/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import toggle_light from '../../Images/night.png';
import toggle_dark from '../../Images/day.png';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
function MyNavbar({ theme, setTheme}) {
  const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }
  return (
  
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* <img onClick={() => { toggle_mode() }} src={theme == 'light' ? toggle_light : toggle_dark} alt='' className='img-fluid' style={{ width: '40px', height: '40px', marginRight: '10px',cursor: 'pointer'}}></img> */}
      </Navbar>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
   
    
  );
}

export default MyNavbar;
