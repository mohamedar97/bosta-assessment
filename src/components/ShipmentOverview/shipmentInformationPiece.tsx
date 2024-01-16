import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

interface ShipmentInformationPieceProps {
  title: string;
  value: string;
  color?: string;
}
const ShipmentInformationPiece: React.FC<ShipmentInformationPieceProps> = ({
  title,
  value,
  color,
}) => {
  return (
    <Grid item xs={3}>
      <Typography variant="h6">{title}</Typography>
      <Typography color={color} sx={{ overflow: "hidden" }} variant="h5">
        {value}
      </Typography>
    </Grid>
  );
};

export default ShipmentInformationPiece;
