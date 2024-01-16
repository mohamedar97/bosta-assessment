import { Stack } from "@mui/material";
import Link from "@mui/material/Link";
import React from "react";
import NavBarItem from "../navBarItem";

interface Props {
  title: string;
  handleClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  open: boolean;
}
const FormTitle: React.FC<Props> = ({ title, handleClick, open }) => {
  return (
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
  );
};

export default FormTitle;
