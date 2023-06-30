import {
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
const Title = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginX={2}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h1" className="overflow-hidden text-white">
          Just QR 👌
        </Typography>
        <Typography
          variant="body2"
          className="text-white
"
        >
          Easily transform any text or link into an scaneable QR code
        </Typography>
      </ThemeProvider>
    </Grid>
  );
};

export default Title;
