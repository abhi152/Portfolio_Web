import React from "react";


const Skillcard = (props) => {
    return (
        <div
            style=
            {{
                "maxWidth": "500px", "maxHeight": "50px", "marginTop": "20px", "marginLeft": "200px",
                "borderRadius": "10px"
            }} class="card horizontal">

            <div class="card-icon ">
            
                <box-icon style={{ "width": "50px", "height": "50px"}} type='logo' color="#4a55bd" name={props.iconname}></box-icon>
            </div>

            <div style={{ "width": "400px", marginTop: "20px", paddingTop: "5px" }} class="progress">
                <div style={{ "width": props.width*4 }} class="determinate"></div>
            </div>
            <h6 style={{
                fontFamily: "'Bakbak One', cursive"
            }}>{props.width}%</h6>

        </div>

    )
}
const skills = () => {

    return (

        <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between"}}>
        <div>
            <div style={{"marginLeft":"200px"}}>
                <h4 className="skilltitle">Profeesional Experience</h4>
                
                <p className="skillbody">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo excepturi ipsa illo animi saepe magnam a sed voluptates dolorem quae, nemo officia nihil ab, rem unde possimus dolores minima eius.
                </p>
            </div>
            <Skillcard
                iconname="html5"
                width={70}
            />
            <Skillcard
                iconname="c-plus-plus"
                width={10}
            />
            <Skillcard
                iconname="java"
                width={20}
            />
            <Skillcard
                iconname="javascript"
                width={30}
            />
            <Skillcard
                iconname="python"
                width={70}
            />
            <Skillcard
                iconname="react"
                width={40}
            />
            <Skillcard
                iconname="nodejs"
                width={100}
            />
            <Skillcard
                iconname="git"
                width={70}
            />


        </div>
        <div className="skillimg" >
        <img className="workingimage" src={require('./images/working.jpg')} />
        </div>
        </div>

    )
}
export default skills;