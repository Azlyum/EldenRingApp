import EldenRingApi from "../components/Api/EldenRingApi";

const Ammo = () => {
  return (
    <div>
      <h1>Ammo</h1>
      <h2>
        Welcome to the different types of ammo you can craft or find throughout
        Elden Ring
      </h2>
      <EldenRingApi endpoint={"ammos"} />
    </div>
  );
};

export default Ammo;
