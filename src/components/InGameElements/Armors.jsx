import EldenRingApi from "../Api/EldenRingApi";

export const Armor = () => {
  return (
    <div>
      <h1 id='armor'>Armor</h1>
      <EldenRingApi endpoint={"armors"} />
    </div>
  );
};

export default Armor;
