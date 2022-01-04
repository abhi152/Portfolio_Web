import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Icon } from '@iconify/react';
import { positions, width } from "@mui/system";

const date = new Date();
console.log(date.getFullYear())

const footer = () => {
    return (
        <div>
            <footer style={{marginTop:"85px"}} className="page-footer #000000 black">
                <div style={{ "textAlign": "center", "cursor": "pointer" }} className="container">

                    <LinkedIn onClick={(event) => {
                        window.location.href = 'https://www.linkedin.com/in/abhinav-kudnar-912a711b6/'
                    }} style={{ "marginRight": "20px", "width": "30px", "height": "30px" }} />
                    <InstagramIcon
                        onClick={(event) => {
                            window.location.href = 'https://www.instagram.com/abhinavkudnar/'
                        }}
                        style={{ "marginRight": "20px", "width": "30px", "height": "30px" }} />

                    <GitHub onClick={(event) => {
                        window.location.href = 'https://github.com/abhi152?tab=repositories'
                    }} style={{ "marginRight": "20px", "width": "30px", "height": "30px" }} />

                </div>
                <div className="footer-copyright #000000 black">
                    <div style={{ "textAlign": "center" }} className="container ">
                        Copyright©{date.getFullYear()} All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default footer;