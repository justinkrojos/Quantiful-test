import React, { useState, useEffect } from "react";
import { fetchData } from "../config/helpers";
import "./number-item.css";

// Container for number-type data
export function NumberItem(props) {
  const { title, api } = props;

  // Contains numerical value to be displayed
  const [data, setData] = useState(0);

  useEffect(() => {
    fetchData(api).then((x) => {
      setData(x.pokemon_species_details.length);
    });
  }, []);

  return (
    <section>
      <h2 className="numberTitle">{title}</h2>
      <h1 className="numberData">{data}</h1>
    </section>
  );
}
