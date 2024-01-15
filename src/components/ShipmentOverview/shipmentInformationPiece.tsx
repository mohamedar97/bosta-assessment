import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

interface ShipmentInformationPieceProps {
  title: string;
  value: string;
}
const ShipmentInformationPiece: React.FC<ShipmentInformationPieceProps> = ({
  title,
  value,
}) => {
  return (
    <Grid item xs={3}>
      <Typography variant="h6">{title}</Typography>
      <Typography sx={{ overflow: "hidden" }} variant="h5">
        {value}
      </Typography>
    </Grid>
  );
};

export default ShipmentInformationPiece;
