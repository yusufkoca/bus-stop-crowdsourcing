import React, { FunctionComponent, useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { useBusStops } from "../../providers/BusStopsContext";
import { useParams } from "react-router-dom";
import ErrorView from "../../components/ErrorView";
import ProgressBar from "./ProgressBar";
import DonationsHistory from "./DonationsHistory";
import { useConstants } from "../../providers/ConstantsContext";
import Donate from "./Donate";

const BusStopPage: FunctionComponent = () => {
  const { id } = useParams();
  const { busStops } = useBusStops();
  const { targetDonationForEach, targetDonationCurrency } = useConstants();
  const busStop = busStops.find((stop) => stop.stopId.toString() === id);

  useEffect(() => {
    document.title = busStop ? busStop.name : "Bus Stop " + id;
  }, []);

  if (!busStop) {
    return <ErrorView errorMessage="We couldn't find the specified Bus Stop" />;
  }

  const calculateProgressSoFar = () => {
    return Math.min(
      (busStop.donationsRaisedInDollars / targetDonationForEach) * 100,
      100
    );
  };
  const remainingDonationsToTarget =
    targetDonationForEach - busStop.donationsRaisedInDollars;

  return (
    <Container maxWidth={"md"}>
      <Box
        display="flex"
        width={"100%"}
        alignItems="center"
        justifyContent="center"
        margin={2}
      >
        <Typography color="inherit" variant={"h4"}>
          {busStop.name}
        </Typography>
      </Box>
      <ProgressBar progress={calculateProgressSoFar()}></ProgressBar>
      <Typography variant="h5" align="center" gutterBottom>
        {busStop.donationsRaisedInDollars +
          targetDonationCurrency +
          " donated so far. "}
        {remainingDonationsToTarget < 0
          ? "Goal Reached! Thank you all."
          : remainingDonationsToTarget +
            targetDonationCurrency +
            " to reach the goal"}
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Donate busStop={busStop}></Donate>
        </Grid>
        <Grid item xs={12} md={6}>
          <DonationsHistory busStop={busStop}></DonationsHistory>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BusStopPage;
