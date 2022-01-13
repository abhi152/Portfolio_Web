import React from "react";

import { Link } from "react-router-dom";
const Navbar=()=>{
    return (
        <nav>
        <div className="nav-wrapper black">
          <Link to="/" className="brand-logo right mynav">Abhinav</Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li ><Link className="mynav" to ="/" >Home</Link></li>
            <li ><Link className="mynav" to ="/about" >About</Link></li>
            <li ><Link className="mynav" to ="/skills" >Skills</Link></li>
            <li ><Link className="mynav" to ="/work" >Work</Link></li>
            <li ><Link className="mynav" to ="/contact" >Contact</Link></li>
           
          </ul>
        </div>
      </nav>
    )
}
export default Navbar;