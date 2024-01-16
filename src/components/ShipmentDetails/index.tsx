import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import formatTimestamp from "../../utils/dateFromat";
import shipmentStatusTable from "../../utils/shipmentStatusHashTable";
import shipmentHubTable from "../../utils/shipmentHubHashTable";
import { Column, Data } from "./tableInterfaces";
import AppTable from "./appTable";

function createData(
  Branch: string,
  Date: string,
  Time: string,
  Details: string
): Data {
  return { Branch, Date, Time, Details };
}

export default function ShipmentDetails() {
  const shipmentDetails = useSelector(
    (state: RootState) => state.shipmentDetails
  );
  const [t, i18n] = useTranslation();
  const language = i18n.language === "ar" ? "ar" : "en";
  const alignment = language === "ar" ? "right" : undefined;

  // Table Columns
  const columns: readonly Column[] = [
    {
      id: "Branch",
      label: t(`ShipmentDetails.Table.one`),
      minWidth: 170,
      align: alignment,
    },
    {
      id: "Date",
      align: alignment,
      label: t(`ShipmentDetails.Table.two`),
      minWidth: 170,
    },
    {
      id: "Time",
      label: t(`ShipmentDetails.Table.three`),
      minWidth: 100,
      align: alignment,
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "Details",
      label: t(`ShipmentDetails.Table.four`),
      minWidth: 170,
      align: alignment,
      format: (value: number) => value.toLocaleString("en-US"),
    },
  ];

  // Table Rows
  let rows = shipmentDetails.shipmentEvents.map((event) => {
    let status =
      language === "ar"
        ? shipmentStatusTable(event.state).description.ar
        : shipmentStatusTable(event.state).description.en;
    let hub =
      language === "ar"
        ? shipmentHubTable(event.hub ?? "-").description.ar
        : shipmentHubTable(event.hub ?? "-").description.en;
    return createData(
      hub,
      formatTimestamp({ timestamp: event.date, format: "dd/mm/yyyy" }),
      formatTimestamp({ timestamp: event.time, format: "hh:mm" }),
      status
    );
  });

  return (
    <>
      <Typography marginBottom={10} variant="h5">
        {t(`ShipmentDetails.Title`)}
      </Typography>
      <Paper
        elevation={0}
        sx={{
          border: "1px solid #ddd",
          borderRadius: "4px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <AppTable columns={columns} rows={rows} />
      </Paper>
    </>
  );
}
