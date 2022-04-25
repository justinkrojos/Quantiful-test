import React, { useState, useEffect } from "react";
import { fetchData } from "../config/helpers";
import styles from "./ListWidget.module.css";

// Container for list-type data
export default function ListWidget(props) {
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
  }, [api]);

  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        {data.map((value) => {
          return (
            <div className={styles.data} key={value}>
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}
