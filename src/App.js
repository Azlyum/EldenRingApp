import React from "react";
import "./css/App.css";
import {
  Ammo,
  Armor,
  AshesOfWar,
  Bosses,
  Classes,
  Creatures,
  Incantations,
  Items,
  Locations,
  Npc,
  Shields,
  Sorceries,
  Spirit,
  Talisman,
  Weapon,
  NavBar
} from './components/Index.jsx';

function App() {
  return (
    <>
    <NavBar />
    <div className="App-background">
    <div className="App-contents">
      <h1>Elden Ring Project</h1>
      <p>
        This is a Project i created for myself 
        <br />I am also wanting to show
        off one of my favourite games in the process 
        <br />I hope you will find
        this page useful and interesting as i delve deep into elden ring lore
      </p>
    </div>
    <div>
       <Ammo />
       <Armor />
      <AshesOfWar />
      <Bosses />
      <Classes />
      <Creatures />
      <Incantations />
      <Items />
      <Locations />
      <Npc />
      <Shields />
      <Sorceries />
      <Spirit />
      <Talisman />
      <Weapon />
      </div>
      </div>
      </>
  );
}

export default App;
