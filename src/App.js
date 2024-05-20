import "./css/App.css";
import EldenRingApi from "./components/Api/EldenRingApi"
// import SimpleCard from "./components/card/card";

function App() {
  return (
    <div className="App-background">
      <h1>Elden Ring Project</h1>
      <p>
        This is a Project i created for myself <br />I am also wanting
        to show off one of my favourite games in the process <br />I hope you
        will find this page usefull and interesting as i delve deep into elden
        ring lore
      </p>

      <img
        src="./EldenRingMain01.jpg"
        alt="of the cover art for Elden Ring"
      />
      <div>
        <EldenRingApi/>
      </div>
    </div>
  );
}

export default App;
