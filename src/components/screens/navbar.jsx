import React from "react";
import reactRouterDom from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar=()=>{
    return (
        <nav>
        <div className="nav-wrapper #ffffff white ">
          <Link to="/" className="brand-logo right">Abhinav</Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li ><Link className="active" to ="/" >Home</Link></li>
            <li ><Link className="active" to ="/about" >About</Link></li>
            <li ><Link className="active" to ="/skills" >Skills</Link></li>
            <li ><Link className="active" to ="/work" >Work</Link></li>
            <li ><Link className="active" to ="/contact" >Contact</Link></li>
           
          </ul>
        </div>
      </nav>
    )
}
export default Navbar;