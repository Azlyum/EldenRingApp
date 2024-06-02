import EldenRingApi from "../Api/EldenRingApi";

const Bosses = () => {
  return (
    <div>
      <h1 id='bosses'>Bosses</h1>
      <EldenRingApi endpoint={"bosses"} />
    </div>
  );
};

export default Bosses;
