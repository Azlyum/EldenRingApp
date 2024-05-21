import EldenRingApi from "../Api/EldenRingApi";

const Ammo = () => {
  return (
    <div>
      <h1>Ammo</h1>
      <EldenRingApi endpoint={"ammos"} />
    </div>
  );
};

export default Ammo;
