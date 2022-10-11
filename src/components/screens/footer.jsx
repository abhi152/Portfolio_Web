import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import { GitHub, LinkedIn } from "@mui/icons-material";


const date = new Date();
console.log(date.getFullYear())

const Footer = () => {
    return (
        <div>
            <footer style={{marginTop:"85px" }} className="page-footer black">
                <div style={{ "textAlign": "center", "cursor": "pointer" }} className="container">

                    <LinkedIn onClick={(event) => {
                        window.location.href = 'https://www.linkedin.com/in/abhinav-kudnar-912a711b6/'
                    }} style={{ "marginRight": "20px", "width": "30px", "height": "30px" ,color:"white"}} />
                    <InstagramIcon
                        onClick={(event) => {
                            window.location.href = 'https://www.instagram.com/abhinavkudnar/'
                        }}
                        style={{ "marginRight": "20px", "width": "30px", "height": "30px",color:"white" }} />

                    <GitHub onClick={(event) => {
                        window.location.href = 'https://github.com/abhi152?tab=repositories'
                    }} style={{ "marginRight": "20px", "width": "30px", "height": "30px",color:"white" }} />

                </div>
                <div className="footer-copyright ">
                    <div style={{ "textAlign": "center" ,color:"white" }} className="container ">
                        Copyright©{date.getFullYear()} All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;