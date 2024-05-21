import EldenRingApi from "../Api/EldenRingApi";

const Incantations = () => {
  return (
    <div>
      <h1>Incantations</h1>
      <EldenRingApi endpoint={"incantations"} />
    </div>
  );
};

export default Incantations;
