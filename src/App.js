import { useConfig } from "./config/useConfig";
import ListWidget from "./components/ListWidget";
import NumberWidget from "./components/NumberWidget";
import "./App.css";
import { Box } from "@mui/material";

function App() {
  const configData = useConfig();

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gap={2}
      className="backgroundContainer"
    >
      {configData.columns.map((column) => {
        return (
          <Box
            gridColumn={`span ${column.size * 3}`}
            className="columnContainer"
            key={column.heading}
          >
            <div>{column.heading}</div>
            {column.widgets.map((widget) => {
              if (widget.type === "list") {
                return (
                  <Box className="boxList" key={widget.title}>
                    <ListWidget title={widget.title} api={widget.api} />
                  </Box>
                );
              }
              return (
                <Box className="boxItem" key={widget.title}>
                  <NumberWidget title={widget.title} api={widget.api} />
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
}

export default App;
