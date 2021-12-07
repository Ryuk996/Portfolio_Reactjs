import React from 'react'
import { useState } from "react";
import { IconButton } from "@material-ui/core";
import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import "./Contact.scss";
import emailjs from "emailjs-com"

function Contact() {
    const [message, setMessage] = useState("");
    const [senderName, setSenderName] = useState("");
    const [senderMail, setSenderMail] = useState("");
    const [fieldFalse,setFalse] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(senderName)
    console.log(senderMail)
    console.log(message)
    if( (senderMail || senderName || message ) ==" "){
       setFalse(true)
      console.log("false")
    }else{
      console.log("done")
    emailjs.sendForm("service_7bfhwtj","template_vvwt14z",e.target,"user_8oz05kUSUZgXljQcm4jnl")
      .then(res=>{
        console.log(res);
        setFalse(false);
      }).catch(err=> console.log(err))
      setMessage("")
      setSenderName("")
      setSenderMail("")
    }
  }
    return (
        <div className="contact" id="contact">
        <div className="left">
          {/* <img src="/Assets/bumper-sticker-brand-png-favpng-dPj2Ki0vZZFqAZWSbFskZVTRX.jpg" alt="" /> */}
          <h4 className="txtxa">Hello!</h4>
        </div>
        <div className="right">
          <h2>Contact.</h2>
          <form onSubmit={handleSubmit}>
            <label className="la">Name</label>
            <input type="text" placeholder="Name" name="senderName" value={senderName} onChange={e =>setSenderName(e.target.value)} />
            {/* <br></br> https://img.freepik.com/free-vector/hello-word-memphis-background_136321-401.jpg?size=626&ext=jpg*/}
            <label className="la">Email</label>
            <input type="email" placeholder="Email" name="senderMail" value={senderMail} onChange={e =>setSenderMail(e.target.value)} />
            <br></br>
            <textarea placeholder="Message" name="message" value={message} onChange={e =>setMessage(e.target.value)}></textarea>
            <br></br>
            <button type="submit">Send</button>
            {/* <br></br> */}
          </form>
          {fieldFalse ? <span className='spanza'>*Fill all fields</span> : <span className='spanza'>Thanks, I'll reply ASAP :</span> }
          <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/thirunavukkarasu-kumaravel-a71b35147"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a
            href="https://github.com/Ryuk996"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GitHub />
            </IconButton>
          </a>
         
        </div>
        </div>
      </div>
    )
}

export default Contact
