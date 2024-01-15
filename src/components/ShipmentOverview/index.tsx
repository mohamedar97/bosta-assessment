import Box from "@mui/material/Box";
import ShipmentInformation from "./shipmentInformation";
import { Divider } from "@mui/material";
import ShipmentOverviewStepper from "./shipmentOverviewStepper";

const ShipmentOverview = () => {
  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: "4px",
      }}
      width={"100%"}
    >
      <ShipmentInformation />
      <Divider />
      <ShipmentOverviewStepper />
    </Box>
  );
};

export default ShipmentOverview;
