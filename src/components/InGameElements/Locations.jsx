import EldenRingApi from "../Api/EldenRingApi";

const Locations = () => {
  return (
    <div>
      <h1 id='location'>Locations</h1>
      <EldenRingApi endpoint={"locations"} />
    </div>
  );
};

export default Locations;
