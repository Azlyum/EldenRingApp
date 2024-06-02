import EldenRingApi from "../Api/EldenRingApi";

const Sorceries = () => {
  return (
    <div>
      <h1 id='sorceries'>Sorceries</h1>
      <EldenRingApi endpoint={"sorceries"} />
    </div>
  );
};

export default Sorceries;
