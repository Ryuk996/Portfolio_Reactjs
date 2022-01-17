// import React from 'react'
// import {Link} from "react-scroll" ;
// import "./header.css"

// function Header({selected, setSelected, setOpen}) {
//     return (
    
//     <nav className="navbar">
//          <div className="container">
//         <div className="header">
//             <ul className="header__left">
//         <h1>
//           Develop<span>er</span>
//         </h1>
//       </ul>
//       <ul className="header__right">
//         <Link to="about" smooth={true} duration={500}>
//           <li
//             className={
//               selected === "about" ? "header__right--active" : undefined
//             }
//             onClick={() => setSelected("about")}
//           >
//             About Me
//           </li>
//         </Link>
//         <Link to="skills" smooth={true} duration={500}>
//           <li
//             className={
//               selected === "skills" ? "header__right--active" : undefined
//             }
//             onClick={() => setSelected("skills")}
//           >
//             Skills
//           </li>
//         </Link>
//         <Link to="projects" smooth={true} duration={500}>
//           <li
//             className={
//               selected === "projects" ? "header__right--active" : undefined
//             }
//             onClick={() => setSelected("projects")}
//           >
//             Projects
//           </li>
//         </Link>
//         <Link to="exp" smooth={true} duration={500}>
//           <li
//             className={selected === "exp" ? "header__right--active" : undefined}
//             onClick={() => setSelected("exp")}
//           >
//             Experience
//           </li>
//         </Link>
//         <Link to="contact" smooth={true} duration={500}>
//           <li
//             className={
//               selected === "contact" ? "header__right--active" : undefined
//             }
//             onClick={() => setSelected("contact")}
//           >
//             Contact
//           </li>
//         </Link>
//         <li className="header__right--semiactive" onClick={() => setOpen(true)}>
//           Join with Me
//         </li>
//       </ul>
//       <div className="toggle" onClick={() => setSelected(!selected)}>
//             <button>T</button>
           
//             </div>
//         </div>
        
//         </div>
        
//             </nav>
           
//     )
// }

// export default Header
