import EldenRingApi from "../Api/EldenRingApi";

const AshesOfWar = () => {
  return (
    <div>
      <h1>AshesOfWar</h1>
      <EldenRingApi endpoint={"ashes"} />
    </div>
  );
};

export default AshesOfWar;
