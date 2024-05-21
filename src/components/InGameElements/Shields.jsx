import EldenRingApi from "../Api/EldenRingApi";

const Shields = () => {
  return (
    <div>
      <h1>Shields</h1>
      <EldenRingApi endpoint={"shields"} />
    </div>
  );
};

export default Shields;
