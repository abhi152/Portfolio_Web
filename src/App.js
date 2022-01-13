
import Navbar from './components/screens/navbar.jsx';
import Home from './components/screens/home.jsx';
import Skills from './components/screens/skills.jsx';
import About from './components/screens/about.jsx';
import Work from './components/screens/work.jsx';
import Contact from './components/screens/contact.jsx';

import Footer from './components/screens/footer.jsx';

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
