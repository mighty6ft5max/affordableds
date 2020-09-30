import { createMuiTheme } from "@material-ui/core/styles";
const tan = "rgba(221, 207, 185, 0.9)";
const teal = "rgba(45, 73, 81,1)";
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal,
    },
    secondary: {
      main: tan,
    },
  },

  typography: {
    h3: {
      color: tan,
      fontFamily: "Gotham Bold",
      fontSize: "3.2rem",
      letterSpacing: "-0.1em",
    },
    h5: {
      fontFamily: "Copperplate Gothic Bold",
      fontSize: "1.4rem",
      lineHeight: 1,
    },
    h6: {
      color: "white",
      fontFamily: "Copperplate",
      fontSize: "1.2rem",
    },
    body1: {
      color: "white",
      fontSize: ".87rem",
      "& span": {
        color: tan,
      },
    },
  },
  overrides: {
    MuiOutlinedInput: {
      notchedOutline: {
        background: "rgba(221, 207, 185, 0.5)",
        border: "1px solid white",
        boxShadow: "inset 3px 3px 3px rgba(45, 73, 81,1)",
      },
    },
  },
});

export default theme;
