import Grid from "@mui/material/Grid";
import TrackShipmentForm from "./trackShipmentForm";
import NavBarItem from "./navBarItem";

const RightSection = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="end"
      alignItems="center"
      spacing={20}
    >
      <Grid item>
        <TrackShipmentForm />
      </Grid>
      <Grid item>
        <NavBarItem title="Sign In" link="https://business.bosta.co/signin" />
      </Grid>
      <Grid item>
        <NavBarItem title="ENG" link="#" />
      </Grid>
    </Grid>
  );
};

export default RightSection;
