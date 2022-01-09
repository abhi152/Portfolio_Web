import React from "react";
import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGoogle } from '@fortawesome/free-solid-svg-icons'


const Skillcard = (props) => {
    return (
        <div
            style=
            {{
                "maxWidth": "500px", "maxHeight": "50px", "marginTop": "20px", "marginLeft": "200px",
                "borderRadius": "10px"
            }} class="card horizontal">

            <div class="card-icon ">

                <box-icon style={{ "width": "50px", "height": "50px" }} type='logo' color="#4a55bd" name={props.iconname}></box-icon>
            </div>

            <div style={{ "width": "400px", marginTop: "20px", paddingTop: "5px" }} class="progress">
                <div style={{ "width": props.width * 4 }} class="determinate"></div>
            </div>
            <h6 style={{
                fontFamily: "'Bakbak One', cursive"
            }}>{props.width}%</h6>

        </div>

    )
}

const Cpskill = (props) => {
    return (
        <div
            style=
            {{
                "maxWidth": "900px", "maxHeight": "300px", margin: "auto",
                "borderRadius": "10px",
                marginTop: "60px",
                display: "flex",
                justifyContent: "space-between"



            }} class="card horizontal">

            <div>
                <img style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", "objectFit": "contain", height: "100%", width: "150px" }} src={props.iconlink} />
            </div>

            <div style={{ marginLeft: "20px" }}>
                <p style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
                    {props.info}
                </p>
                <a href={props.proflink}>Profile Link : <u style={{ color: "blue" }}>{props.proflink}</u></a>
            </div>


        </div>
    )
}
const Skills = () => {

    return (
        <div>
            <div style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between" }}>
                <div>
                    <div style={{ "marginLeft": "200px" }}>
                        <h4 className="skilltitle">Profeesional Experience</h4>

                        <p className="skillbody">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo excepturi ipsa illo animi saepe magnam a sed voluptates dolorem quae, nemo officia nihil ab, rem unde possimus dolores minima eius.
                        </p>
                    </div>
                    <Skillcard
                        iconname="html5"
                        width={100}
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
            <div>
                <br />
                <Divider variant="middle"

                />
            </div>

            <div style={{ "marginLeft": "200px" }}>
                <h4 className="skilltitle">InterPersonal Skills </h4>

                <h6 className="skilltitle">Problem Solving</h6>

                <p className="skillbody">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo excepturi ipsa illo animi saepe magnam a sed voluptates dolorem quae, nemo officia nihil ab, rem unde possimus dolores minima eius.
                </p>


                <div >
                    <Cpskill

                        iconlink="https://img.icons8.com/color/144/000000/codechef.png/"
                        proflink="https://www.codechef.com/users/abhinav_152"
                        info="Codechef is Very good platform for compatatving programinng.
                                On this platform you can test your problem solving skills.
                                I am Constaly active on this platform and faced lots of up down.
                                I am currntly 3 star on it with max rating 1712 and aming for 5 start in Coming days."
                    />

                    <Cpskill

                        iconlink="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png"
                        proflink="https://www.hackerrank.com/abhinavkudnar152"
                        info="Hacerrank is Very good platform for compatatving programinng.
                                On this platform you can test your problem solving skills.
                                I am Constaly active on this platform and faced lots of up down.
                                I am currntly 3 star on it with max rating 1712 and aming for 5 start in Coming days."
                    />

                    <Cpskill

                        iconlink="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png/"
                        proflink="https://leetcode.com/abhinavkudnar152/"
                        info="Leetcode is Very good platform for compatatving programinng.
                                On this platform you can test your problem solving skills.
                                I am Constaly active on this platform and faced lots of up down.
                                I am currntly 3 star on it with max rating 1712 and aming for 5 start in Coming days."
                    />


                    <Cpskill

                        iconlink="https://img.icons8.com/color/48/000000/GeeksforGeeks.png"
                        proflink="https://auth.geeksforgeeks.org/user/abhinavkudnar152/profile"
                        info="GFG is Very good platform for compatatving programinng.
                                On this platform you can test your problem solving skills.
                                I am Constaly active on this platform and faced lots of up down.
                                I am currntly 3 star on it with max rating 1712 and aming for 5 start in Coming days."
                    />

                </div>

               

            </div>
            <div>
                <br />
                <Divider variant="middle"

                />
                 </div>
                 
            <div style={{ "marginLeft": "200px" }}>
                <h4 className="skilltitle">Others Skills </h4>

                <p className="skillbody">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo excepturi ipsa illo animi saepe magnam a sed voluptates dolorem quae, nemo officia nihil ab, rem unde possimus dolores minima eius.
                </p>
            </div>

        </div>

    )
}
export default Skills;