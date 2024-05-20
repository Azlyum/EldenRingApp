import React, { setState, useState } from "react";
import "./css/App.css";
import Ammo from "./pages/ammo";

function App() {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };
//   <button onClick={toggleVisibility}>
//   {isVisible ? "Hide Data" : "Show Data"}
// </button>
// {isVisible && (
// <div id="data"> <h1>Hello Julie I am State</h1></div>
// )}

  return (
    <div className="App-background">
      <h1>Elden Ring Project</h1>
      <p>
        This is a Project i created for myself <br />I am also wanting to show
        off one of my favourite games in the process <br />I hope you will find
        this page usefull and interesting as i delve deep into elden ring lore
      </p>

      <img src="./EldenRingMain01.jpg" alt="of the cover art for Elden Ring" />
      <div>
       <Ammo />
      </div>
    </div>
  );
}

export default App;
