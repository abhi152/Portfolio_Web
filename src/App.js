
import Navbar from './Components/Screens/Navbar.jsx';
import Home from './Components/Screens/Home.jsx';
import Skills from './Components/Screens/Skills.jsx';
import About from './Components/Screens/About.jsx';
import Work from './Components/Screens/Work.jsx';
import Contact from './Components/Screens/Contact.jsx';

import Footer from './Components/Screens/Footer.jsx';

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
