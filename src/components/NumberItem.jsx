import React, { useState, useEffect } from "react";
import { fetchData } from "../config/helpers";
import "./number-item.css";

// Container for number-type data
export function NumberItem(props) {
  const { title, api } = props;

  const [data, setData] = useState(0);

  useEffect(() => {
    fetchData(api).then((x) => {
      setData(x.pokemon_species_details.length);
    });
  }, []);

  return (
    <section className="numberContainer">
      <div className="image" />
      <h2 className="title">{title}</h2>
      <h1 className="data">{data}</h1>
    </section>
  );
}
