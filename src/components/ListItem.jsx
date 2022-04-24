import React, { useState, useEffect } from "react";
import { fetchData } from "../config/helpers";

// Container for list-type data
export function ListItem(props) {
  const { title, subtitle, api } = props;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(api).then((x) => {
      setData(
        x.results.map((y) => {
          return y.name;
        })
      );
    });
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <i>{subtitle}</i>
      {data.map((x) => {
        return <p key={x}>{x}</p>;
      })}
    </div>
  );
}
