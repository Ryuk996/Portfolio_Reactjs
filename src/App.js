import { useEffect } from "react";
import './App.scss';
import Header from './Components/Header/header';
import Topbar from './Components/Topbar/Topbar';
import Menu from './Components/HamMenu/Menu';
import Intro from './Components/Intro/Intro';
import Portfolio from './Components/Portfolio/Portfolio';
import Project from './Components/Project/Project';
import Contact from './Components/Contacts/Contact';
import {useState} from "react";
import Myskills from './Components/MySkills/Myskill';


function App() {

 
  const [menuOpen,setMenuOpen] = useState(false)
 
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Intro/>
      <Portfolio/>
      < Myskills/>
      <Project/>
      <Contact/>
    </div>
   </div>
  );
}

export default App;
