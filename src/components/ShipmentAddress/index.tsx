import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import ShipmentHelp from "./shipmentHelp";

const ShipmentAddress = () => {
  const [t, i18n] = useTranslation();

  return (
    <>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Typography marginBottom={10} variant="h5">
            {t(`ShipmentAddress.Title`)}
          </Typography>
          <Paper
            elevation={0}
            sx={{
              paddingX: 10,
              paddingY: 12,
              border: "1px solid #ddd",
              borderRadius: "4px",
              width: "100%",
              overflow: "hidden",
              backgroundColor: "#fafafa",
              maxWidth: "350px",
            }}
          >
            <Typography variant="h6">{t(`ShipmentAddress.Address`)}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <ShipmentHelp />
        </Grid>
      </Grid>
    </>
  );
};

export default ShipmentAddress;
