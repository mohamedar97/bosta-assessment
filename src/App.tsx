import { Typography } from "@mui/material";
import AppNavbar from "./components/AppNavbar";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  if (i18n.language === "ar") {
    document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
  } else {
    document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
  }

  return (
    <div className="App">
      <AppNavbar />
      <Typography variant="h4">Hello, world!</Typography>
    </div>
  );
}

export default App;
