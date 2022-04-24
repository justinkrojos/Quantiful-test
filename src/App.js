import { useConfig } from "./config/useConfig";
import { ListItem } from "./components/ListItem";
import { NumberItem } from "./components/NumberItem";
import "./App.css";
import { Box } from "@mui/material";

function App() {
  const configData = useConfig();
  // console.log(configData);

  // Array to hold JSX elements for list data
  const listArray = [];

  configData.columns[0].widgets.forEach((element) => {
    listArray.push(
      <Box gridColumn="span 12">
        <ListItem title={element.title} api={element.api} />
      </Box>
    );
  });

  // Array to hold JSX elements for number data
  const numberArray = [];

  configData.columns[1].widgets.forEach((element) => {
    numberArray.push(
      <Box sx={{ width: "45%", float: "left" }}>
        <NumberItem title={element.title} api={element.api} />
      </Box>
    );
  });

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gap={2}
      sx={{ padding: 5 }}
    >
      <Box gridColumn="span 3">
        <div>{configData.columns[0].heading}</div>
        {listArray}
      </Box>
      <Box gridColumn="span 6" gap={"1em"}>
        <Box gridColumn="span 12">
          <div>{configData.columns[1].heading}</div>
        </Box>
        {numberArray}
      </Box>
    </Box>
  );
}

export default App;
