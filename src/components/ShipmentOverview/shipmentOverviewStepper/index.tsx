import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import shipmentStatusTable from "../../../utils/shipmentStatusHashTable";
import shipmentReasonHashTable from "../../../utils/shipmentReasonHashTable";
import AppStepper from "./appStepper";

export default function ShipmentOverviewStepper() {
  const shipmentDetails = useSelector(
    (state: RootState) => state.shipmentDetails
  );
  let shipmentHoldReasons: string = "";

  const [t, i18n] = useTranslation();
  const language = i18n.language === "ar" ? "ar" : "en";

  let color =
    shipmentStatusTable(shipmentDetails.shipmentStatus).color ?? "#e30613";
  const value = shipmentStatusTable(shipmentDetails.shipmentStatus).value;
  shipmentDetails.shipmentEvents.forEach((event) => {
    if (event.reason && shipmentDetails.shipmentStatus != "DELIVERED") {
      switch (event.exceptionCode) {
        case "1":
          color = "#f9ba02";
          break;
        case "3":
          color = "#f9ba02";
          break;
        default:
          color = "#e30613";
      }
      let reason =
        language === "ar"
          ? shipmentReasonHashTable(event.reason).description.ar
          : shipmentReasonHashTable(event.reason).description.en;
      shipmentHoldReasons = reason;
    }
  });

  return (
    <Stack sx={{ width: "100%", paddingY: 15 }}>
      <AppStepper
        shipmentHoldReasons={shipmentHoldReasons}
        color={color}
        value={value}
      />
    </Stack>
  );
}
