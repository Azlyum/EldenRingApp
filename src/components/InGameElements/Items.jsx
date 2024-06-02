import EldenRingApi from "../Api/EldenRingApi";

const Items = () => {
  return (
    <div>
      <h1 id='items'>Items</h1>
      <EldenRingApi endpoint={"items"} />
    </div>
  );
};

export default Items;
