import Grid from "@mui/material/Grid";
import TrackShipmentForm from "./trackShipmentForm";
import NavBarItem from "./navBarItem";
import { useTranslation } from "react-i18next";
import { on } from "events";

const RightSection = () => {
  const [t, i18n] = useTranslation();

  const changeLanguage = (lng: string) => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("en");
    }
  };

  const keys = ["three", "two"] as const;

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

      {keys.map((key) => {
        let title = t(`AppNavbar.LastSection.${key}.title`);
        let link = t(`AppNavbar.LastSection.${key}.link`);
        let onClick = () => {};

        if (title === "ENG" || title === "AR") {
          onClick = () => changeLanguage(title);
        }
        return (
          <Grid item>
            <NavBarItem title={title} link={link} onClick={onClick} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default RightSection;
