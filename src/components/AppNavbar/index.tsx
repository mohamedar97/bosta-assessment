import Grid from "@mui/material/Grid";
import NavLogo from "./navLogo";
import MiddleSection from "./middleSection";
import RightSection from "./rightSection";
import BurgerMenu from "./burgerMenu";

const AppNavbar = () => {
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
      <Grid sx={{ display: { xs: "block", md: "none" } }} item xs={1}>
        <BurgerMenu />
      </Grid>
    </Grid>
  );
};

export default AppNavbar;
