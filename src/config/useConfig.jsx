import { useState, useEffect } from "react";

// Copied over from test brief
export const configuration = {
  columns: [
    {
      // First column
      size: 1, // The size of the column
      heading: "General Pokemon information",
      widgets: [
        {
          title: "Pokemon Colours",
          subtitle: "List of all the colours",
          type: "list",
          api: "https://pokeapi.co/api/v2/pokemon-color/",
        },
        {
          title: "Pokemon Gender",
          subtitle: "List of all the genders",
          type: "list",
          api: "https://pokeapi.co/api/v2/gender/",
        },
      ],
    },
    {
      // Second column
      size: 2, // The size of the column
      heading: "Pokemon counts",
      widgets: [
        {
          title: "Genderless count",
          type: "number",
          api: "https://pokeapi.co/api/v2/gender/3/",
        },
        {
          title: "Female count",
          type: "number",
          api: "https://pokeapi.co/api/v2/gender/1/",
        },
        {
          title: "Male count",
          type: "number",
          api: "https://pokeapi.co/api/v2/gender/2/",
        },
        {
          title: "Example count",
          type: "number",
          api: "https://pokeapi.co/api/v2/gender/2/",
        },
      ],
    },
  ],
};

// Custom hook to listen for changes in configuration data
export function useConfig() {
  const [config, setConfig] = useState(configuration);

  useEffect(() => {
    setConfig(configuration);
  }, []);

  return config;
}
