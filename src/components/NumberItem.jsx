import React, { useState, useEffect } from "react";
import { fetchData } from "../config/helpers";

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
    <div>
      <h1>{title}</h1>
      <p key={title}>{data}</p>
    </div>
  );
}
