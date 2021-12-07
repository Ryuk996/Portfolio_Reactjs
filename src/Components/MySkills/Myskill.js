import { useEffect, useState } from "react";
import Portfoliolist from "../PortfolioList//Portfoliolist";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./myskill.scss";
;


function Myskills() {



    return (
        <div className="skillContainer" id="myskills">
            <div className="skillContainer__image">
        <img src="https://s3.amazonaws.com/www-inside-design/uploads/2019/06/1620x1620-810x810.png" alt="" />
      </div>
      <div className="skillContainer__text">
        <h2>SKILLSET</h2>
        <div className="skillContainer__skillSet">
          <h5>React</h5>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>NodeJS</h5>
          <div className="skillContainer__slider skillContainer__slider2">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>AWS S3</h5>
          <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>SaaS and Tailwind</h5>
          <div className="skillContainer__slider skillContainer__slider4">
            <LinearProgress variant="determinate" value={50} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Firebase</h5>
          <div className="skillContainer__slider skillContainer__slider5">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>MongoDB</h5>
          <div className="skillContainer__slider skillContainer__slider6">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
      </div>
      </div>
    )
   
    
}

export default Myskills
