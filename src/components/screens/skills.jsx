import React from "react";
import Divider from '@mui/material/Divider';



const Skillcard = (props) => {
    return (
        <div
            style=
            {{
                "maxWidth": "500px", "maxHeight": "50px", "marginTop": "30px", "marginLeft": "200px",
                "borderRadius": "10px"

            }} class="card horizontal">

            <div class="card-icon ">

                <box-icon style={{ "width": "50px", "height": "50px" }} type='logo' color="#4a55bd" name={props.iconname}></box-icon>
            </div>

            <div style={{ "width": "400px", marginTop: "20px", paddingTop: "5px" }} class="progress">
                <div style={{ "width": props.width * 4 }} class="determinate"></div>
            </div>
            <h6 style={{
                fontFamily: "'Bakbak One', cursive", color: "black"
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
                justifyContent: "space-between",
                color: "black"



            }} class="card horizontal">

            <div >
                <img style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", "objectFit": "contain", height: "100%", width: "100px" }} src={props.iconlink} alt="" />
            </div>

            <div style={{ marginLeft: "20px", color: "black" }}>
                <p style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif", marginLeft: "15px", color: "black", marginRight: "10px" }}>

                    {props.info}

                </p>

                <a style={{ "marginLeft": "15px" }} color="white" href={props.proflink}> Profile Link: <u style={{ color: "blue", marginLeft: "10px" }}>{props.proflink}</u></a>


            </div>




        </div>
    )
}
const Skills = () => {

    return (
        <div>
            <div style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", color: "white" }}>
                <div>
                    <div style={{ "marginLeft": "200px", "marginTop": "20px" }}>
                        <h4 className="skilltitle">Profeesional Experience</h4>
                        <br />
                        <p className="skillbody">
                            Professional skills are essential to work in industry. I constantly learning new Technologies and improving my skills.
                            I have listed following skills with level of experience that I possessed at this moment.
                            In addition to the below technical skill, I want to add database skills which are MySQL and mongo DB
                        </p>
                    </div>
                    <Skillcard
                        iconname="html5"
                        width={60}
                    />
                    <Skillcard
                        iconname="c-plus-plus"
                        width={80}
                    />
                    <Skillcard
                        iconname="java"
                        width={80}
                    />
                    <Skillcard
                        iconname="javascript"
                        width={50}
                    />
                    <Skillcard
                        iconname="python"
                        width={60}
                    />
                    <Skillcard
                        iconname="react"
                        width={65}
                    />
                    <Skillcard
                        iconname="nodejs"
                        width={60}
                    />
                    <Skillcard
                        iconname="git"
                        width={60}
                    />


                </div>
                <div className="skillimg" >
                    <img className="workingimage" src={require('./images/working.jpg')} alt="" />
                </div>
            </div>
            <div>
                <br />
                <Divider variant="middle"
                    color="white"
                />
            </div>

            <div style={{ "marginLeft": "200px", color: "white" }}>
                <h4 className="skilltitle">InterPersonal Skills </h4>

                <h6 className="skilltitle">Problem Solving</h6>

                <p className="skillbody">
                    As an Engineer Problem solving is essential skill.
                    This enables us to solve not only tech problems but can use these skills in another domains.
                    I solve Coding questions on different coding platform and some them I have mention below.
                </p>


                <div >
                    <Cpskill

                        iconlink="https://img.icons8.com/color/144/000000/codechef.png/"
                        proflink="https://www.codechef.com/users/abhinav_152"
                        info="Codechef is Very good platform for competitive programming.
                        On this platform you can test your problem solving skills.
                        I am Constantly active on this platform and faced lots of up down.
                        I am currently 3 star on it with max rating 1712 and aiming for 5 start in Coming days.
"
                    />

                    <Cpskill

                        iconlink="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png"
                        proflink="https://www.hackerrank.com/abhinavkudnar152"
                        info="Hacerrank is platform where you will get problems according to different difficulty level.
                         On this platform I have achieved 5 star rating in problem Solving.
                         I have most of problems in C/C++ Language. 
                         There are other various languages present on this platform .
                              "
                    />

                    <Cpskill

                        iconlink="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png/"
                        proflink="https://leetcode.com/abhinavkudnar152/"
                        info="LeetCode is the  platform to help you enhance your skills,
                         expand your knowledge and prepare for technical interviews.
                         I have started this recently but given me confidence on some medium level questions. "
                    />


                    <Cpskill

                        iconlink="https://img.icons8.com/color/48/000000/GeeksforGeeks.png"
                        proflink="https://auth.geeksforgeeks.org/user/abhinavkudnar152/profile"
                        info="It is a Computer Science portal. It contains various articles on computer fundamentals. 
                        I  solve problems related to data structure  and algorithm on this platform ."
                    />

                </div>



            </div>
            <div>
                <br />
                <Divider variant="middle"
                    color="white"
                />
            </div>

            <div style={{ "marginLeft": "200px", color: "white" }}>
                <h4 className="skilltitle">Others Skills </h4>

                <p className="skillbody">

                I am also good at Communication skills and trying to improve it more as it is very essential in any domain.
                </p>
            </div>

        </div>

    )
}
export default Skills;