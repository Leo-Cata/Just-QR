import { useState, ChangeEvent } from "react";
import { Stack, Paper } from "@mui/material";
import Grid from "@mui//material/Unstable_Grid2";
import Input from "../components/Input";
import QrCode from "../components/QrCode";

const InputContainer = () => {
  const [text, setText] = useState("");

  const handleText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <Grid
      container
      className="h-screen w-screen bg-[#373B59] px-2"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Paper elevation={24}>
        <Stack className="flex flex-col lg:flex-row">
          <Input onTextChange={handleText} />

          <QrCode text={text} />
        </Stack>
      </Paper>
    </Grid>
  );
};

export default InputContainer;
