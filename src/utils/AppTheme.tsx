import { createTheme } from "@mui/material/styles";

const lang = "en"; // Fetch from provider

const AppTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#e30613",
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
      color: "#4F5665",
    },
    h6: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22px",
      color: "#4F5665",
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
