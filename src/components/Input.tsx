import { Grid, TextField } from "@mui/material";
import { ChangeEvent } from "react";

type InputProp = {
  onTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ onTextChange }: InputProp) => {
  return (
    <Grid
      xl={6}
      className="flex items-center justify-center p-10 lg:px-10 lg:py-0"
    >
      <TextField
        variant="standard"
        placeholder="Type your URL here"
        onChange={onTextChange}
        helperText="Your QR code will be generated automatically as you type."
      />
    </Grid>
  );
};

export default Input;
