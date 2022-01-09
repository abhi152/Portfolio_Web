import React from "react";

const About = () => {

    return (
        <div className="about" style={{"color":"white"}} >
            <div >
                <img className="aboutimage" src={require('./images/aboutimage.jpg')} />
            </div>
            <div >
                <h5  className="discription">I'm Abhinav Kudnar</h5>
                <div>
                    <p className="mypara">
                        I am Pre Final Year Student at Pune Institute of Computer Technology and Currently Persuing
                        Under graduate degree in Computer Engineering .
                    </p>
                    <br/>
                    <p className="mypara">
                        I  belongs to Nashik where i have done my school Education.
                        I like Problem Solving  and specifically doing Compatative Programming and hence improving my problem Solving Skills.
                        I have also Started Web Devolpment with MERN Stack and this is My Portfolio website.
                    </p>

                </div>

            </div>
            
        </div>
    )
}
export default About;