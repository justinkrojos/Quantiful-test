import { useConfig } from "./config/useConfig";
import { ListItem } from "./components/ListItem";
import { NumberItem } from "./components/NumberItem";
import "./App.css";
import { Box } from "@mui/material";

function App() {
  const configData = useConfig();

  // Array to hold JSX elements
  const JSXArray = [];

  configData.columns.forEach((column) => {
    JSXArray.push(
      <Box gridColumn={`span ${column.size * 3}`} className="columnContainer">
        <div>{column.heading}</div>
        {column.widgets.map((widget) => {
          if (widget.type === "list") {
            return (
              <Box className="boxList">
                <ListItem title={widget.title} api={widget.api} />
              </Box>
            );
          }
          return (
            <Box className="boxItem">
              <NumberItem title={widget.title} api={widget.api} />
            </Box>
          );
        })}
      </Box>
    );
  });

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gap={2}
      className="backgroundContainer"
    >
      {JSXArray}
    </Box>
  );
}

export default App;
