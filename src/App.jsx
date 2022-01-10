
import Navbar from './components/screens/Navbar';
import Home from './components/screens/Home';
import Skills from './components/screens/Skills';
import About from './components/screens/About';
import Work from './components/screens/Work';
import Contact from './components/screens/Contact';

import Footer from './components/screens/Footer';

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
