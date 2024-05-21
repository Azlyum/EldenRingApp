import EldenRingApi from "../Api/EldenRingApi";

const Items = () => {
  return (
    <div>
      <h1>Items</h1>
      <EldenRingApi endpoint={"items"} />
    </div>
  );
};

export default Items;
