import EldenRingApi from "../Api/EldenRingApi";

const Incantations = () => {
  return (
    <div>
      <h1 id='incantations'>Incantations</h1>
      <EldenRingApi endpoint={"incantations"} />
    </div>
  );
};

export default Incantations;
