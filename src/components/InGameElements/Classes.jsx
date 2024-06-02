import EldenRingApi from "../Api/EldenRingApi";

const Classes = () => {
  return (
    <div>
      <h1 id='classes'>Classes</h1>
      <EldenRingApi endpoint={"classes"} />
    </div>
  );
};

export default Classes;
