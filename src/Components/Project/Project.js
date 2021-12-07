import React from 'react'
import './project.scss'
import { useState } from "react";

import { ChevronDoubleLeftIcon,ChevronDoubleRightIcon } from '@heroicons/react/outline';
function Project() {

    const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "File Drive Cloud",
      desc:
        "File drive cloud build with MERN and AWS S3 ",
      project : " https://thiru-htdrive.netlify.app",
      img:"/Assets/cloud.jpeg",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Social Media Application",
      desc:
        "Social media app build with MERN ,Firebase and Tailwind css",
      project : " https://thiru-capstone-socialmedia-app.netlify.app",  
      img:"/Assets/social-media-5187243__340.png",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Chatter App",
      desc:
        "Chatting App build with MERN and Socketio",
      project : " https://thiruchatterapp.netlify.app",  
      img: "/Assets/live_chat_anim_2.gif",
    },
    {
        id: "4",
        icon: "./assets/writing.png",
        title: "DigiKart APP",
        desc:
          "E-commerce site build with MERN stack and Paypal thirdparty payment gateway",
        project : " https://thiru-digikart.netlify.app",  
        img:"/Assets/9bee35_beebdf8edafb4ff9802088a20d29c262_mv2.gif",
      },
      {
        id: "5",
        icon: "./assets/writing.png",
        title: "Dictionary app",
        desc:
          "Simple dictionary with html,reactjs,css and axios",
        project : " https://thiru-task-dictionary-api.netlify.app/",  
        img:"/Assets/giphy.gif",
      },
     
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

    return (
        <>
        
        <div className="works" id="works">
        {/* <h1>he</h1> */}
            <span className="texpr" style={{color:"royalblue"}}>Projects</span>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
          
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p >{d.desc}</p>
                  <span><a  href={`${d.project}`} target="_blank" >Project</a></span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ChevronDoubleLeftIcon className="arrow left" onClick={() => handleClick("left")}></ChevronDoubleLeftIcon>
  
      <ChevronDoubleRightIcon className="arrow right" onClick={() => handleClick()} ></ChevronDoubleRightIcon>
    </div>
    </>
    )
}

export default Project
