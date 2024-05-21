import EldenRingApi from "../Api/EldenRingApi";

const Weapon = () => {
  return (
    <div>
      <h1>Weapons</h1>
      <EldenRingApi endpoint={"weapons"} />
    </div>
  );
};

export default Weapon;
