import React from "react";
import Divider from '@mui/material/Divider';

const Intern = (props) => {
    return (
       
        
          <div style={{maxWidth:"600px", height:"400px", maxHeight:"900px",margin:"auto"  ,marginTop:"50px" ,textAlign:"center" ,borderRadius:"10px" }} class="card">
            <div style={{marginTop:"10px"}}  >
              <img style={{width:props.x+"px",height:props.y+"px" ,marginLeft:"auto" ,marginTop:"20px" }} src={props.icon} alt=""/>
             
            </div>
            <div>
                <br />
                <Divider variant="middle"
               
                />
            </div>
            <div class="card-content">
              <p style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
             {props.info}
              </p>
            </div>
            <div>
                <Divider variant="middle"
                
                />
            </div>
            <div style={{alignSelf:"start" ,width:"400px" ,height:"100px", fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>
            <h6><b>{props.role},</b><i>{props.orgname}</i></h6>
            <h6>{props.startdate} - {props.enddate} | {props.city}, {props.country}</h6>
            </div>
            
          
          </div>
     
    )
}

const Work = () => {

    return (
        <div>

            <div style={{ "marginLeft": "200px" ,color:"white" }}>
                <h4 className="skilltitle">Work Experience/Internships</h4>
            </div>
            
            <div>
                <Intern
                orgname="Espressif Systems"
                icon="https://www.espressif.com/sites/all/themes/espressif/logo-black.svg"
                city="Pune"
                country="India"
                role="Upcoming Associate Software Enginner Intern"
                startdate="Jan/2023"
                enddate="Jul/2023"
                info="Espressif Systems (688018.SH) is a public multinational, fabless semiconductor company established in 2008, with offices in China, the Czech Republic, India, Singapore and Brazil. We have a passionate team of engineers and scientists from all over the world."
                x="200"
                y="100"
                />
            </div>
            <div>
                <Intern
                orgname="ElasticRun"
                icon="https://entrackr-bucket.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/02/08001951/Elasticrun.jpg"
                city="Pune"
                country="India"
                role="Associate Intern"
                startdate="Sept/2022"
                enddate="Dec/2022"
                info="ElasticRun extends the reach of brand’s direct distribution networks to deep rural markets. It enables access to a set of net new stores and customers for the brands, which were not accessible through the traditional distribution networks."
                x="200"
                y="100"
                />
            </div>
            <div>
                <Intern
                orgname="Edify Accelrators"
                icon="https://media-exp1.licdn.com/dms/image/C5103AQFkcaxAZih5tA/profile-displayphoto-shrink_800_800/0/1569669295944?e=1671062400&v=beta&t=eqBl6PWFXZlNDqUZrNtEPu8oXqD4_Cyk5tW4Wfo3ny4"
                city="Pune"
                country="India"
                role="Web devolopment Intern"
                startdate="Feb/2022"
                enddate="May/2022"
                info="Edify Accelerators. Strategy Management "
                x="150"
                y="100"
                />
            </div>


            <div>
                <Intern
                orgname="iMocha"
                icon="https://www.jobvite.com/wp-content/uploads/2021/05/imocha-logo.png"
                city="Pune"
                country="India"
                role="Problem Setter"
                startdate="Dec/2021"
                enddate="Present"
                info="iMocha helps companies to solve remote candidate assessment challenges.
                iMocha provides 2,000+ online assessments (digital skills, clouds, enterprise applications, aptitude, domain, etc.) 
               in 50+ domains like IT, Tech, BFSI, Security and more."
                x="310"
                y="100"
                />
            </div>

            <div>
                <br />
                <Divider variant="middle"
                color="white"
                />
            </div>

            <div style={{ "marginLeft": "200px", color:"white" }}>
                <h4 className="skilltitle">Clubs/ Volunteer</h4>
            </div>

            <div>
            <Intern
                orgname="PCSB"
                icon="https://www.pictcsi.com/assets/CSI%20Logo%20Nav.png"
                city="Pune"
                country="India"
                role="Competitve Programming Team"
                startdate="Jan/2021"
                enddate="Jun/2021"
                info="Computer Society of India (CSI) is the first and largest body of computer professionals in India. And hence PCSB aims to Facilitate Research, Knowledge Sharing,
                 Learning and Career Enhancement among all categories of Tech professionals.
                 We strive to provide the following opportunities to our members. "
                 x="110"
                 y="100"
                
                />
                <Intern
                orgname="PCSB"
                icon="https://www.pictcsi.com/assets/CSI%20Logo%20Nav.png"
                city="Pune"
                country="India"
                role="Marketting Team"
                startdate="Sept/2020"
                enddate="Jan/2021"
                info="Computer Society of India (CSI) is the first and largest body of computer professionals in India. And hence PCSB aims to Facilitate Research, Knowledge Sharing,
                 Learning and Career Enhancement among all categories of Tech professionals.
                 We strive to provide the following opportunities to our members. "
                 x="110"
                 y="100"
                
                />
            </div>
        </div>
    )
}
export default Work;