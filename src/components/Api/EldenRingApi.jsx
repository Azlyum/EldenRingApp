import React, { useState, useEffect } from "react";
import SimpleCard from "../card/card";

const EldenRingApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://eldenring.fanapis.com/api/ammos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const renderData = (obj) => {
    return Object.keys(obj).map((key) => {
      const value = obj[key];
      if (typeof value === "object") {
        return (
          <div key={key}>
            {key}:{renderData(value)}
            <br />
          </div>
        );
      } else {
        return (
          <div key={key}>
            {key}:{value}
            <br />
          </div>
        );
      }
    });
  };

  return (
    <div>
      <h2>Ammo's in Elden Ring</h2>
      <SimpleCard title={data && renderData(data)} />
    </div>
  );
};

export default EldenRingApi;
