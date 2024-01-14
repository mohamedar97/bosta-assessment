import { createTheme } from "@mui/material/styles";

const lang = "en"; // Fetch from provider

const AppTheme = createTheme({
  palette: {
    primary: {
      main: "#7C2C69",
    },
    secondary: {
      main: "#2194BC",
    },
  },
  spacing: 2,
  typography: {
    fontFamily: lang === "en" ? "Lato, sans-serif" : "Cairo, sans-serif",
    h4: {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "22px",
      color: "#000000",
    },
    h5: {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "18px",
      color: "#000000",
    },
    h6: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22px",
      color: "#000000",
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22px",
      color: "#000000",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "18px",
      color: "#000000",
    },
  },
});

export default AppTheme;
