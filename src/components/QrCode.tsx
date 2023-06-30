import { Grid } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";

type QrCodeProp = {
  text: string;
};

const QrCode = ({ text }: QrCodeProp) => {
  return (
    <Grid xl={6} className="flex justify-center bg-[#8A94DF]">
      <div className="my-6 lg:m-10 ">
        <QRCodeSVG value={text} size={300} bgColor="#8A94DF" />
      </div>
    </Grid>
  );
};

export default QrCode;
