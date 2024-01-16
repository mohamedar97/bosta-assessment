import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import NavBarItem from "./navBarItem";
import { useTranslation } from "react-i18next";

type Anchor = "left" | "right";

export default function BurgerMenu() {
  const [t, i18n] = useTranslation();
  const changeLanguage = (lng: string) => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("en");
    }
  };
  const orientation = i18n.language === "en" ? "right" : "left";
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  const middleSectionKeys = ["one", "two", "three"] as const;
  const lastSectionKeys = ["three", "two"] as const;

  const list = (anchor: Anchor) => (
    <Box onClick={toggleDrawer(anchor, false)}>
      <List>
        {lastSectionKeys.map((key) => {
          const title = t(`AppNavbar.LastSection.${key}.title`);
          const link = t(`AppNavbar.LastSection.${key}.link`);
          const onClick =
            title === "ENG" || "AR" ? () => changeLanguage(title) : () => {};

          return (
            <ListItem disablePadding>
              <ListItemButton>
                <NavBarItem title={title} link={link} onClick={onClick} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {middleSectionKeys.map((key) => {
          return (
            <ListItem disablePadding>
              <ListItemButton>
                <NavBarItem
                  title={t(`AppNavbar.MiddleSection.${key}.title`)}
                  link={t(`AppNavbar.MiddleSection.${key}.link`)}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      {([orientation] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
