
import Navbar from 'd:/React/Portfolio/src/components/screens/Navbar';
import Home from 'd:/React/Portfolio/src/components/screens/Home';
import Skills from 'd:/React/Portfolio/src/components/screens/Skills';
import About from 'd:/React/Portfolio/src/components/screens/About';
import Work from 'd:/React/Portfolio/src/components/screens/Work';
import Contact from 'd:/React/Portfolio/src/components/screens/Contact';

import Footer from 'd:/React/Portfolio/src/components/screens/Footer';
import 'd:/React/Portfolio/src/App.css';

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
