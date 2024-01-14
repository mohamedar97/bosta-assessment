import {
  Box,
  IconButton,
  InputBase,
  Link,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import NavBarItem from "./navBarItem";

interface Props {
  title: string;
  placeholder: string;
}

const TrackShipmentForm: React.FC<Props> = ({ title, placeholder }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Link
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        href="#"
        sx={{
          cursor: "pointer",
        }}
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <NavBarItem title={title} link="#" />
        </Stack>
      </Link>
      <Menu
        sx={{
          boxShadow:
            "0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05)",
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          disableRipple
          sx={{
            padding: "0px !important",
            "&hover": {
              backgroundColor: "transparent !important",
            },
          }}
        >
          <Box paddingY={16} paddingX={20}>
            <Typography marginBottom={3} variant="h5">
              {title}
            </Typography>
            <Stack direction="row" alignItems="center">
              <TextField
                sx={{ height: "56px", borderRadius: "4px " }}
                placeholder={placeholder}
              />
              <IconButton
                disableRipple
                type="button"
                sx={{
                  color: "#ffffff",
                  height: "56px",
                  padding: "10px",
                  borderRadius: "4px ",
                  border: "1px solid rgba(0, 0, 0, 0.23)",
                  backgroundColor: "#e30613",
                  "&:hover": {
                    backgroundColor: "#e30613",
                  },
                }}
              >
                <SearchIcon />
              </IconButton>
            </Stack>
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
};

export default TrackShipmentForm;
