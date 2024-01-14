import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  ButtonBase,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { on } from "events";
import React from "react";
import { useTranslation } from "react-i18next";

interface NavBarItemProps {
  title: string;
  link: string;
  onClick?: Function;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ title, link, onClick }) => {
  const [t, i18n] = useTranslation();
  const color = title === "ENG" || title === "AR" ? "#e30613 !important" : "";

  const onClickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Grid item>
      <Link
        href={link}
        sx={{
          cursor: "pointer",
        }}
      >
        {/* <Stack direction="row" alignItems="start" gap={1}> */}
        <ButtonBase
          // variant="text"
          onClick={onClickHandler}
          sx={{
            padding: "0px ",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
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
        </ButtonBase>
        {/* </Stack> */}
      </Link>
    </Grid>
  );
};

export default NavBarItem;
