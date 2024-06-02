import EldenRingApi from "../Api/EldenRingApi";

const Spirit = () => {
  return (
    <div>
      <h1 id='spirit'>Spirit</h1>
      <EldenRingApi endpoint={"spirits"} />
    </div>
  );
};

export default Spirit;
