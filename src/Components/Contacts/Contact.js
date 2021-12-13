import React from 'react'
import { useState,useEffect } from "react";
import { IconButton } from "@material-ui/core";
import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import "./Contact.scss";
import emailjs from "emailjs-com"
import { motion } from 'framer-motion';
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion';

function Contact() {
    const [message, setMessage] = useState("");
    const [senderName, setSenderName] = useState("");
    const [senderMail, setSenderMail] = useState("");
    const [fieldFalse,setFalse] = useState(true)
    const {ref , inView} = useInView({threshold: 0.3});
    const animationTxt = useAnimation();
    const animationForm = useAnimation();

    useEffect(() => {                                                         // renders everytime when the div comes in viewport
      console.log("useEffect hpp inView",inView)
      if(inView){
        animationTxt.start({
          x:0,
          transition:{
            type:'spring' , duration: 2, bounce: 0.3
          }
        })
        animationForm.start({
          y:0,
          transition:{
            type:'tween', duration: 2, bounce: 0.3
          }
        })
      }
      if(!inView){
        animationTxt.start({x:'-100vw'})
        animationForm.start({y:'100vw'})
      }
    },[inView])

  const handleSubmit = (e) => {
    e.preventDefault();
    const k =2;
    console.log(senderName)
    console.log(senderMail)
    console.log(message)
    if( !senderName || !senderMail || !message ){                                         //evaluating empty string ot array
       setFalse(true)
      console.log("false")
    }else{
      console.log("done")
    emailjs.sendForm("service_7bfhwtj","template_vvwt14z",e.target,"user_8oz05kUSUZgXljQcm4jnl")
      .then(res=>{
        // console.log(res);
        setFalse(false);
      }).catch(err=> console.log(err))
      setMessage("")
      setSenderName("")
      setSenderMail("")
    }
  }
    return (
          <div className="contactpageZ">
            <h2>Contact.</h2>
          <form onSubmit={handleSubmit} >
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
          </div>
          
    )
}

export default Contact


{/* <div ref={ref} className="contact" id="contact">
         <motion.div className="leftC" animate={animationTxt}>
          {/* <img src="/Assets/bumper-sticker-brand-png-favpng-dPj2Ki0vZZFqAZWSbFskZVTRX.jpg" alt="" /> 
          <h4 className="txtxa">Hello!</h4>
        </motion.div>
        <motion.div className="rightC" >
          {/* <h2>Contact.</h2>
          <div className="contactpageZ">
          <form onSubmit={handleSubmit} >
            <label className="la">Name</label>
            <input type="text" placeholder="Name" name="senderName" value={senderName} onChange={e =>setSenderName(e.target.value)} />
            {/* <br></br> https://img.freepik.com/free-vector/hello-word-memphis-background_136321-401.jpg?size=626&ext=jpg
            <label className="la">Email</label>
            <input type="email" placeholder="Email" name="senderMail" value={senderMail} onChange={e =>setSenderMail(e.target.value)} />
            <br></br>
            <textarea placeholder="Message" name="message" value={message} onChange={e =>setMessage(e.target.value)}></textarea>
            <br></br>
            <button type="submit">Send</button>
             <br></br> 
          </form>
          </div> 
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
        
        </motion.div>
      </div> */}