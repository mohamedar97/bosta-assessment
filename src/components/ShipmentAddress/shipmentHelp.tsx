import { Box, Button, Grid, Link, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import { useTranslation } from "react-i18next";

const ShipmentHelp = () => {
  const [t, i18n] = useTranslation();

  return (
    <Paper
      elevation={0}
      sx={{
        paddingX: 10,
        paddingY: 12,
        border: "1px solid #ddd",
        borderRadius: "4px",
        width: "100%",
        overflow: "hidden",
        maxWidth: "350px",
      }}
    >
      <Grid container>
        <Grid item xs={4}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img src="help.png" alt="help" />
          </Box>
        </Grid>
        <Grid item container xs={8}>
          <Grid item xs={12}>
            <Typography variant="h5">
              {t(`ShipmentAddress.ShipmentHelp.title`)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link href={t(`ShipmentAddress.ShipmentHelp.link`)}>
              <Button
                sx={{
                  width: "100%",
                  borderRadius: "40px",
                }}
                variant="contained"
              >
                {t(`ShipmentAddress.ShipmentHelp.button`)}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ShipmentHelp;
