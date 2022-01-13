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
                icon="https://media-exp1.licdn.com/dms/image/C4E0BAQHrTMepCzRupQ/company-logo_200_200/0/1627144153563?e=1649894400&v=beta&t=GmT-ozue1jM_AaJzrxg7Vs1QPC7TlsB9yItH0t3sn_0"
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
                icon="https://media-exp1.licdn.com/dms/image/C4E0BAQHrTMepCzRupQ/company-logo_200_200/0/1627144153563?e=1649894400&v=beta&t=GmT-ozue1jM_AaJzrxg7Vs1QPC7TlsB9yItH0t3sn_0"
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