import "./intro.scss"
import { init } from "ityped";
import { useEffect, useRef,useState } from "react";
// import { motion } from 'framer-motion';
import Aos from 'aos';
import "aos/dist/aos.css"

function Intro() {

    const textRef = useRef();
    const[effect,setEffect]=useState(true)

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Photographer"],
    });

  }, []);

  useEffect(() => {
    Aos.init({duration:1500})
    Aos.refresh();
    
  }, [])
 

    return (

    <div className="intro" id="intro">
      <div className="left">
        <div data-aos ="fade-right" className="imgContainer">
          <img  src="/Assets/My Post (4).jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          {/* { effect ? <></> : <motion.h2 animate={{fontSize:"50px"}}>Hi There, I'm</motion.h2>} */}
          <h2>Hi There, I'm</h2>
          {/* <motion.h2 animate={{fontSize:"50px"}}>Hi There, I'm</motion.h2> */}
          <h1>Thirunavukkarasu Kumaravel</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
    )
}

export default Intro
