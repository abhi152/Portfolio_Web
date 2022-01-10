
import Navbar from './components/screens/Navbar.jsx';
import Home from './components/screens/Home.jsx';
import Skills from './components/screens/Skills.jsx';
import About from './components/screens/About.jsx';
import Work from './components/screens/Work.jsx';
import Contact from './components/screens/Contact.jsx';

import Footer from './components/screens/Footer.jsx';

import './App.css';

import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
       <Navbar/>

      <Route exact path="/">
       <Home/>
      </Route>

      <Route exact path="/about">
       <About/>
      </Route>

      <Route exact path="/work">
       <Work/>
      </Route>

      <Route exact path="/skills">
       <Skills/>
      </Route>

      <Route exact path="/contact">
       <Contact/>
      </Route>

      <Footer/>

    
    </BrowserRouter>
  
  
   
   
    

  );
}

export default App;
