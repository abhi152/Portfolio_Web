import React from "react";
import reactRouterDom from "react-router-dom";
import { Link } from "react-router-dom";
const navbar=()=>{
    return (
        <nav>
        <div className="nav-wrapper #ffffff white">
          <Link to="/" className="brand-logo right">Abhinav</Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to ="/" >Home</Link></li>
            <li><Link to ="/about" >About</Link></li>
            <li><Link to ="/skills" >Skills</Link></li>
            <li><Link to ="/work" >Work</Link></li>
            <li><Link to ="/contact" >Contact</Link></li>
           
          </ul>
        </div>
      </nav>
    )
}
export default navbar;