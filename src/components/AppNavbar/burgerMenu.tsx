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

  const list = (anchor: Anchor) => (
    <Box onClick={toggleDrawer(anchor, false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <NavBarItem
              title={t(`AppNavbar.LastSection.three.title`)}
              link={t(`AppNavbar.LastSection.three.link`)}
              onClick={changeLanguage}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <NavBarItem
              title={t(`AppNavbar.LastSection.two.title`)}
              link={t(`AppNavbar.LastSection.two.link`)}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <NavBarItem
              title={t(`AppNavbar.MiddleSection.one.title`)}
              link={t(`AppNavbar.MiddleSection.one.link`)}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <NavBarItem
              title={t(`AppNavbar.MiddleSection.two.title`)}
              link={t(`AppNavbar.MiddleSection.two.link`)}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <NavBarItem
              title={t(`AppNavbar.MiddleSection.three.title`)}
              link={t(`AppNavbar.MiddleSection.three.link`)}
            />
          </ListItemButton>
        </ListItem>
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
