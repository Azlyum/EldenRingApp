import EldenRingApi from "../Api/EldenRingApi";

const Creatures = () => {
  return (
    <div>
      <h1>Creatures</h1>
      <EldenRingApi endpoint={"creatures"} />
    </div>
  );
};

export default Creatures;
