import { useState, ChangeEvent } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Stack, TextField, Paper } from "@mui/material";
import Grid from "@mui//material/Unstable_Grid2";

const Input = () => {
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
          <Grid
            xl={6}
            className="flex items-center justify-center p-10 lg:px-10 lg:py-0"
          >
            <TextField
              variant="standard"
              placeholder="Type your URL here"
              onChange={handleText}
              helperText="Your QR code will be generated automatically as you type."
            />
          </Grid>
          <Grid xl={6} className="flex justify-center bg-[#8A94DF]">
            <div className="my-6 lg:m-10 ">
              <QRCodeSVG value={text} size={300} bgColor="#8A94DF" />
            </div>
          </Grid>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Input;
