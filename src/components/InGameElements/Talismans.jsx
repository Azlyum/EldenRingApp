import EldenRingApi from "../Api/EldenRingApi";

const Talisman = () => {
  return (
    <div>
      <h1 id='talisman'>Talisman</h1>
      <EldenRingApi endpoint={"talismans"} />
    </div>
  );
};

export default Talisman;
