import EldenRingApi from "../Api/EldenRingApi";

const Npc = () => {
  return (
    <div>
      <h1 id='npc'>Npc</h1>
      <EldenRingApi endpoint={"npcs"} />
    </div>
  );
};

export default Npc;
