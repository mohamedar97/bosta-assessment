import Grid from "@mui/material/Grid";
import TrackShipmentForm from "./trackShipmentForm";
import NavBarItem from "./navBarItem";
import { useTranslation } from "react-i18next";

const RightSection = () => {
  const [t, i18n] = useTranslation();

  const changeLanguage = (lng: string) => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("en");
    }
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="end"
      alignItems="center"
      spacing={20}
    >
      <Grid item>
        <TrackShipmentForm
          title={t(`AppNavbar.LastSection.one.title`)}
          placeholder={t(`AppNavbar.LastSection.one.placeholder`)}
        />
      </Grid>
      <Grid item>
        <NavBarItem
          title={t(`AppNavbar.LastSection.two.title`)}
          link={t(`AppNavbar.LastSection.two.link`)}
        />
      </Grid>
      <Grid item>
        <NavBarItem
          title={t(`AppNavbar.LastSection.three.title`)}
          link={t(`AppNavbar.LastSection.three.link`)}
          onClick={changeLanguage}
        />
      </Grid>
    </Grid>
  );
};

export default RightSection;
