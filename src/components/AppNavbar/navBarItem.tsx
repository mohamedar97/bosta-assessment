import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, Menu, MenuItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

interface NavBarItemProps {
  title: string;
  link: string;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ title, link }) => {
  const color = title === "ENG" ? "#e30613 !important" : "";
  return (
    <Grid item>
      <Link
        href={link}
        sx={{
          cursor: "pointer",
        }}
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography
            color={color}
            sx={{
              "&:hover": {
                color: "#e30613 !important",
                textDecoration: "underline !important",
              },
            }}
            variant="h5"
          >
            {title}
          </Typography>
        </Stack>
      </Link>
    </Grid>
  );
};

export default NavBarItem;
