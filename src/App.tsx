import { Box, Container, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import AppNavbar from "./components/AppNavbar";
import { useTranslation } from "react-i18next";
import ShipmentOverview from "./components/ShipmentOverview";
import ShipmentDetails from "./components/ShipmentDetails";
import ShipmentAddress from "./components/ShipmentAddress";

function App() {
  const { t, i18n } = useTranslation();
  if (i18n.language === "ar") {
    document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
  } else {
    document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
  }

  return (
    <div className="App">
      <AppNavbar />
      <Divider />
      <Container sx={{ marginY: "5%" }}>
        <Grid spacing={10} container>
          <Grid item xs={12}>
            <ShipmentOverview />
          </Grid>
          <Grid item xs={12} md={8}>
            <ShipmentDetails />
          </Grid>
          <Grid item xs={12} md={4}>
            <ShipmentAddress />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
