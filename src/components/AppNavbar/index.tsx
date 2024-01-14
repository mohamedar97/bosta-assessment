import Grid from "@mui/material/Grid";
import NavLogo from "./navLogo";
import MiddleSection from "./middleSection";
import RightSection from "./rightSection";
import BurgerMenu from "./burgerMenu";
import { useTranslation } from "react-i18next";
import TrackShipmentForm from "./trackShipmentForm";

const AppNavbar = () => {
  const [t, i18n] = useTranslation();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        height: { xs: 100 },
        px: { xs: 20, md: 35 },
        py: { xs: 10, md: 8 },
      }}
    >
      <Grid item xs={1}>
        <NavLogo />
      </Grid>
      <Grid sx={{ display: { xs: "none", md: "block" } }} item xs={5}>
        <MiddleSection />
      </Grid>
      <Grid sx={{ display: { xs: "none", md: "block" } }} item xs={4}>
        <RightSection />
      </Grid>

      <Grid
        sx={{ display: { xs: "block", md: "none" } }}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        item
        xs={2}
      >
        <Grid sx={{ display: { xs: "inline-block", md: "none" } }} item xs={10}>
          <TrackShipmentForm
            title={t(`AppNavbar.LastSection.one.title`)}
            placeholder={t(`AppNavbar.LastSection.one.placeholder`)}
          />
        </Grid>
        <Grid sx={{ display: { xs: "inline-block", md: "none" } }} item xs={2}>
          <BurgerMenu />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AppNavbar;
