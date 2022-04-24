import { useConfig } from "./config/useConfig";
import { ListItem } from "./components/ListItem";
import { NumberItem } from "./components/NumberItem";
import Grid from "@mui/material/Grid";
import "./App.css";

function App() {
  const configData = useConfig();
  // console.log(configData);

  // Array to hold JSX elements for list data
  const listArray = [];

  configData.columns[0].widgets.forEach((element) => {
    listArray.push(
      <Grid item xs={12} key={element.title}>
        <ListItem
          title={element.title}
          subtitle={element.subtitle}
          api={element.api}
        />
      </Grid>
    );
  });

  // Array to hold JSX elements for number data
  const numberArray = [];

  configData.columns[1].widgets.forEach((element) => {
    numberArray.push(
      <Grid item xs={6} key={element.title}>
        <NumberItem title={element.title} api={element.api} />
      </Grid>
    );
  });

  return (
    <div className="backgroundGray">
      <Grid container spacing={2}>
        <Grid container item xs={4}>
          {listArray}
        </Grid>

        <Grid
          container
          item
          xs={8}
          rowSpacing={1}
          columnSpacing={1}
          className="numberBackground"
        >
          {numberArray}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
