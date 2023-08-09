import React from "react"; 
import Main from "./compo/Main";
// import Test from "./compo/Test";
import Contact from "./compo/contact/Contact";
import Project from "./compo/project/Project";
import Skills from "./compo/skills/Skills";
import Coding from "./coding/Coding";
// import New from "./compo/New";
const App = () => { 
  return ( 
    <div className="App">
      <Main/>
      <Project/>
      <Coding/>
      <Skills/>
      <Contact/>
    </div> 
  ); 
}; 
export default App; 