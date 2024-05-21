import SimpleCard from "../card/card";
import useFetchData from "../Hooks/useFetchData";

const EldenRingApi = ({ endpoint }) => {
  const { data, loading, error } = useFetchData(endpoint);

  if (loading) {
    return <div> Hold tight we are searching for our lost Grace...</div>;
  }

  if (error) {
    return <div>Lost sight of grace: {error.message}</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <SimpleCard
          key={item.id}
          title={item.name}
          subTitle={item.type}
          content={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default EldenRingApi;
