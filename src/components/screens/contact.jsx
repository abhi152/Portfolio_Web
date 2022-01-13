import React from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";





   
  
  
const Contact = () => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");


    const sendEmail = (e) => {
       
         if(!name || !email || !message)
         {
          
         }

        var templateParams = {
            name,
            email,
            message
        };

        console.log(templateParams)
      //  emailjs.send(serviceID, templateID, templateParams, userID);
        emailjs.send('service_9e4h74m','template_hkffxua', templateParams,'user_G2uR2ibnynnzPbGZqPFW2')
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);


            }, function(error) {
               console.log('FAILED...', error);
            });

            
       
       
         
      };

    return (
        <div style={{"textAlign":"center" ,marginTop:"81px" }}>
            <div style={{"width":"400px","margin":"auto",marginTop:"50px"}}>
                <input className="contact" type="text" value={name} placeholder="Name" onChange={(e)=>{
                        setName(e.target.value)
                }}/>
                <input className="contact" type="text" value={email} placeholder="Email" onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                
            </div>
            <div style={{"width":"400px",margin:"auto"}}>
            <textarea style={{"height":"200px"}} className="contactmessage" name="message" id="message" cols="30" placeholder="Message" rows="200" value={message} onChange={(e)=>{
                setMessage(e.target.value)
            }}></textarea>
            </div>
            <div style={{"width":"400px",margin:"auto"}}>
            <button  style={{  borderRadius:"30px" ,float:"right"}} color="blue" className="waves-effect waves-light btn-large indigo" onClick={()=>{
                sendEmail()
                setName("")
                setEmail("")
                setMessage("")
            }}><i className="material-icons right" >send</i>Send</button>

            
            </div>
            
        </div>

    )
}
export default Contact;