import Grid from "@mui/material/Grid";
import NavBarItem from "./navBarItem";

const navItems = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Pricing",
    link: "#",
  },
  {
    title: "Contact Sales",
    link: "#",
  },
];

const MiddleSection = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="end"
      spacing={20}
      alignItems="center"
    >
      {navItems.map((item) => (
        <NavBarItem key={item.title} title={item.title} link={item.link} />
      ))}
    </Grid>
  );
};

export default MiddleSection;
