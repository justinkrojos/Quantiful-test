import React, { useState, useEffect } from "react";
import { fetchData } from "../config/helpers";
import styles from "./NumberWidget.module.css";

// Container for number-type data
export default function NumberWidget(props) {
  const { title, api } = props;

  // Contains numerical value to be displayed
  const [data, setData] = useState(0);

  useEffect(() => {
    fetchData(api).then((x) => {
      setData(x.pokemon_species_details.length);
    });
  }, [api]);

  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <h1 className={styles.data}>{data}</h1>
    </div>
  );
}
