import { useEffect, useState } from "react";
import Portfoliolist from "../PortfolioList//Portfoliolist";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./myskill.scss";
// import Aos from 'aos';
// import "aos/dist/aos.css"
import { motion } from 'framer-motion';
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion';

function Myskills() {

    
    const {ref , inView} = useInView({threshold: 0.3});
    const animation = useAnimation();
    const animationImg = useAnimation();
    const [level ,setLevel] = useState(false)

    useEffect(() => {                                                         // renders everytime when the div comes in viewport
      console.log("useEffect hpp inView",inView)
      if(inView){
        animation.start({
          x:0,
          transition:{
            type:'spring' , duration: 2, bounce: 0.3
          }
        })
        animationImg.start({
          y:0,
          transition:{
            type:'spring', duration: 2, bounce: 0.3
          }
        })
        setLevel(true)
      }
      if(!inView){
        animation.start({x:'-100vw'})
        animationImg.start({y:'-100vw'})
        setLevel(false)
      }
    },[inView])

    
    return (
    
        <div ref={ref} className="skillContainer" id="myskills"  >
          
            {/* <motion.div className="skillContainer__image" animate={animationImg}>
        <img src="https://s3.amazonaws.com/www-inside-design/uploads/2019/06/1620x1620-810x810.png" alt="" />
      </motion.div> */}
      <motion.div  className="skillContainer__text" animate ={animation} >
        <h2>SKILLSET</h2>
        <div className="skillContainer__skillSet">
          <h5>React</h5>
          <div  className={level ? "skillContainer__slider skillContainer__slider1" : ""}>
            <LinearProgress variant="indeterminate" />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>NodeJS</h5>
          <div className={level ? "skillContainer__slider skillContainer__slider2" : ""}>
            <LinearProgress variant="indeterminate"  />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>AWS S3</h5>
          <div className={level ? "skillContainer__slider skillContainer__slider3" : ""}>
            <LinearProgress variant="indeterminate"  />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>SaaS and Tailwind</h5>
          <div className={level ? "skillContainer__slider skillContainer__slider4" : ""}>
            <LinearProgress variant="indeterminate"  />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Firebase</h5>
          <div className={level ? "skillContainer__slider skillContainer__slider5" : ""}>
            <LinearProgress variant="indeterminate"  />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>MongoDB</h5>
          <div className={level ? "skillContainer__slider skillContainer__slider6" : ""}>
            <LinearProgress variant="indeterminate"  />
          </div>
        </div>
      </motion.div>
      <motion.div className="skillContainer__image" animate={animationImg}>
        <img src="/Assets/full-stack-development.gif" alt="" />
      </motion.div>
      </div>

    )
   
    
}

export default Myskills
