import { useState, ChangeEvent } from "react";
import { Stack, Paper } from "@mui/material";
import Input from "../components/Input";
import QrCode from "../components/QrCode";

const InputContainer = () => {
  const [text, setText] = useState("");

  const handleText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <Paper elevation={24} className="mx-2 my-4 lg:my-16">
      <Stack className="flex flex-col lg:flex-row">
        <Input onTextChange={handleText} />

        <QrCode text={text} />
      </Stack>
    </Paper>
  );
};

export default InputContainer;
