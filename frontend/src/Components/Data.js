import React, { useEffect, useState } from "react";
import axios from "axios";

const DataList = ({ data }) => {
  //console.log(props, key);
  return (
    <div className="data-list-item">
      <b>{data.title}</b>
      <p>{data.body}</p>
    </div>
  );
};

const Data = () => {
  let [data, setData] = useState([]);
  const url = "http://localhost:8000/api/texts/";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.results);
        //console.log("success");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="data-list">
      {data.map((r, i) => (
        <DataList data={r} key={i}></DataList>
      ))}
    </div>
  );
};

export default Data;