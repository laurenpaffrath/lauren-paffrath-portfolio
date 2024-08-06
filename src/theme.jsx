import { createTheme } from "@mui/material/styles";

const primary = "#ff4de1";
const secondary = "#4dffc3";
const tertiary = "#ffe5fb";
const background = "#1b1f32";
const background2= "#323547";

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    tertiary: {
      main: tertiary,
    },
    background: {
      main: background,
      secondary: background2
    },
    white: {
      main: '#ffffff'
    }
  }
});

export default theme;
