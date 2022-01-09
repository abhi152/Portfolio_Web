import React from "react";

const Skillcard=()=>{
    return(
        <div 
        style=
        {{
            "maxWidth":"500px","maxHeight":"50px","marginTop":"20px","marginLeft":"40px",
            "borderRadius":"10px"
            }} class="card horizontal">
            <div class="card-icon">
                <box-icon style={{"width":"50px","height":"50px"}} type='logo' name='html5'></box-icon>
            </div>
            <div style={{ "width": "400px",marginTop:"20px",paddingTop:"5px" }} class="progress">
                <div style={{ "width": "70%" }} class="determinate"></div>
            </div>
            <h6 style={{
                fontFamily:"'Bakbak One', cursive"
            }}>70%</h6>

        </div>

    )
}
export default Skillcard;