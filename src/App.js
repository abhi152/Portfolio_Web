
import Navbar from './Components/Screens/navbar.jsx';
import Home from './Components/Screens/home.jsx';
import Skills from './Components/Screens/skills.jsx';
import About from './Components/Screens/about.jsx';
import Work from './Components/Screens/work.jsx';
import Contact from './Components/Screens/contact.jsx';

import Footer from './Components/Screens/footer.jsx';

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
