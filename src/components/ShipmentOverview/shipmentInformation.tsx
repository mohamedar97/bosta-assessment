import Grid from "@mui/material/Grid";
import ShipmentInformationPiece from "./shipmentInformationPiece";
import { useTranslation } from "react-i18next";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import formatTimestamp from "../../utils/dateFromat";
import shipmentStatusTable from "../../utils/shipmentStatusHashTable";

const ShipmentInformation = () => {
  const shipmentDetails = useSelector(
    (state: RootState) => state.shipmentDetails
  );

  const [t, i18n] = useTranslation();
  const language = i18n.language === "ar" ? "ar" : "en";

  const color = shipmentStatusTable(shipmentDetails.shipmentStatus).color;
  const status =
    language === "ar"
      ? shipmentStatusTable(shipmentDetails.shipmentStatus).shortDescription.ar
      : shipmentStatusTable(shipmentDetails.shipmentStatus).shortDescription.en;
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-end"
      sx={{
        padding: 20,
      }}
    >
      <ShipmentInformationPiece
        title={
          t(`ShipmentOverview.ShipmentInformation.one`) +
          " " +
          shipmentDetails.shipmentNumber
        }
        value={status}
        color={color}
      />
      <ShipmentInformationPiece
        title={t(`ShipmentOverview.ShipmentInformation.two`)}
        value={formatTimestamp({
          timestamp: shipmentDetails.lastUpdated,
          lang: language,
        })}
      />
      <ShipmentInformationPiece
        title={t(`ShipmentOverview.ShipmentInformation.three`)}
        value={shipmentDetails.vendorName}
      />
      <ShipmentInformationPiece
        title={t(`ShipmentOverview.ShipmentInformation.four`)}
        value={formatTimestamp({
          timestamp: shipmentDetails.deliveryDate,
          format: "dd Month yyyy",
          lang: language,
        })}
      />
    </Grid>
  );
};

export default ShipmentInformation;
