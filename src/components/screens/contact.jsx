import React from "react";

const contact = () => {

    return (
        <div style={{"textAlign":"center" ,marginTop:"81px" }}>
            <div style={{"width":"400px","margin":"auto",marginTop:"50px"}}>
                <input className="contact" type="text" value={""} placeholder="Name" />
                <input className="contact" type="text" value={""} placeholder="Email" />
                
            </div>
            <div style={{"width":"400px",margin:"auto"}}>
            <textarea style={{"height":"200px"}} className="contactmessage" name="message" id="message" cols="30" placeholder="Message" rows="200"></textarea>
            </div>
            <div style={{"width":"400px",margin:"auto"}}>
            <a style={{  borderRadius:"30px" ,float:"right"}} color="blue" className="waves-effect waves-light btn-large indigo"><i className="material-icons right">send</i>Send</a>
            </div>
            
        </div>

    )
}
export default contact;