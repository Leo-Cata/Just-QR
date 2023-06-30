import InputContainer from "./containers/InputContainer";
import Title from "./components/Title";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      className="h-screen w-screen bg-[#373B59]"
    >
      <Title />
      <InputContainer />
    </Grid>
  );
};

export default App;
