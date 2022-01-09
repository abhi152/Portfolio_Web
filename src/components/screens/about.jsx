import React from "react";

const About = () => {

    return (
        <div className="about">
            <div >
                <img className="aboutimage" src={require('./images/aboutimage.jpg')} />
            </div>
            <div >
                <h5 className="discription">I'm Abhinav Kudnar</h5>
                <div>
                    <p className="mypara">
                        I am Pre Final Year Student at Pune Institute of Computer Technology and Currently Persuing
                        Under graduate degrre in Computer Engeneering.
                    </p>
                    <br/>
                    <p className="mypara">
                        I basically belongs to nashik where i have done my school Education.
                        I like Probelm Solving  and specifically Compatative programiing and hence improving my prblem Solving Skills
                        I have also Started Web Devolpment with MERN Stack and this is My portfollio website.
                    </p>

                </div>

            </div>
            
        </div>
    )
}
export default About;