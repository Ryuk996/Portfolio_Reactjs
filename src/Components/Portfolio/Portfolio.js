import { useEffect, useState } from "react";
import Portfoliolist from "../PortfolioList//Portfoliolist";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio, 
} from "../../data";
import {motion} from "framer-motion"; 



function Portfolio() {

    const [selected, setSelected] = useState("featured"); 
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

    return (
      
        <div className="portfolio" id="portfolio">
          
      <div className="Imagecontainer">
      <div className="Zani"><img className="About_img" src='/Assets/PicsArt_12-06-08.50.29.png' alt=" "></img></div>
     
      </div>
      <div className="Aboutcontainer">
        
        <h3 className="About_textH" >Hello there,</h3>
        <br></br>
        <h4 className="About_text"> I'm Thirunavukkarasu ,hails from trichy. I'm photographer by hobbyist, creative species and crave for new learnings.
         Activley looking for job as a web developer, as having hands-on on popular frameworks and react libraries,
         hence gaining adequate knowledges about the technologies to, pace up to develop  creative and interactive web application to 
         enhance the digital culture and make life simpler.  </h4>
        <br></br>
        <a
            href="
            https://drive.google.com/file/d/19lxqo7M_W_mz-96YykQBDnwkMzm3bkL6/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="resume__downloadButton">Download Resume</button>
          </a>
      </div>
    </div>
    
    )
}

export default Portfolio
