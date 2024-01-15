import Grid from "@mui/material/Grid";
import React from "react";
import ShipmentInformationPiece from "./shipmentInformationPiece";
import { useTranslation } from "react-i18next";

const ShipmentInformation = () => {
  const [t, i18n] = useTranslation();

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-end"
      sx={{
        padding: 10,
      }}
    >
      <ShipmentInformationPiece
        title={t(`ShipmentOverview.ShipmentInformation.one`)}
        value="Value"
      />
      <ShipmentInformationPiece
        title={t(`ShipmentOverview.ShipmentInformation.two`)}
        value="Value"
      />
      <ShipmentInformationPiece
        title={t(`ShipmentOverview.ShipmentInformation.three`)}
        value="Value"
      />
      <ShipmentInformationPiece
        title={t(`ShipmentOverview.ShipmentInformation.four`)}
        value="Value"
      />
    </Grid>
  );
};

export default ShipmentInformation;
