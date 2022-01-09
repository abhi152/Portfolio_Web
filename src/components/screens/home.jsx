import { color } from "@mui/system";
import React from "react";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {

 const history=useHistory();
  return (


    <div style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", color:"white" }}>
      <div className="Myname">
        <h1>Hi,</h1>
        <h1>I'am <span style={{ "color": "violet" }}>Abhinav</span></h1>
        <h1>Web Developer</h1>

        <a style={{ "marginTop": "30px",borderRadius:"30px"}} color="blue" className="waves-effect waves-light btn-large indigo"
        onClick={()=>{
            history.push('/contact')
        }}
        ><i className="material-icons right">call</i>Contact</a>
      </div >

      <div >

        <img style={{ "width": "500px", "height": "500px" }} src={require('./images/Profile.png')} />
       

      </div>


    </div>



  )
}
export default Home;