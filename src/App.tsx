import InputContainer from "./containers/InputContainer";
import Title from "./components/Title";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      className="flex h-screen w-screen justify-start bg-[#373B59] sm:justify-center"
    >
      <Title />
      <InputContainer />
    </Grid>
  );
};

export default App;
