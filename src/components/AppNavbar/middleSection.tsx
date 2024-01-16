import Grid from "@mui/material/Grid";
import NavBarItem from "./navBarItem";
import { useTranslation } from "react-i18next";

const MiddleSection = () => {
  const { t } = useTranslation();
  const keys = ["one", "two", "three"] as const;
  return (
    <Grid
      container
      direction="row"
      justifyContent="end"
      spacing={20}
      alignItems="center"
    >
      {keys.map((key) => (
        <NavBarItem
          key={t(`AppNavbar.MiddleSection.${key}.title`)}
          title={t(`AppNavbar.MiddleSection.${key}.title`)}
          link={t(`AppNavbar.MiddleSection.${key}.link`)}
        />
      ))}
    </Grid>
  );
};

export default MiddleSection;
