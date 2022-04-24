import React, { useState, useEffect } from "react";
import { fetchData } from "../config/helpers";
import "./list-item.css";
import { Grid } from "@mui/material";

// Container for list-type data
export function ListItem(props) {
  const { title, api } = props;

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
    <div className="listContainer">
      <h2 className="listTitle">{title}</h2>
      <div className="bodyContainer">
        {data.map((x) => {
          return <div className="listData">{x}</div>;
        })}
      </div>
    </div>
  );
}
