import React, { useState, useEffect } from "react";
import { fetchData } from "../config/helpers";
import "./list-item.css";

// Container for list-type data
export function ListItem(props) {
  const { title, api } = props;

  // Contains array of data to be listed
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(api).then((out) => {
      setData(
        out.results.map((pokedata) => {
          return pokedata.name;
        })
      );
    });
  }, []);

  return (
    <div>
      <h2 className="listTitle">{title}</h2>
      <div className="bodyContainer">
        {data.map((x) => {
          return <div className="listData">{x}</div>;
        })}
      </div>
    </div>
  );
}
