import React, { FunctionComponent, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { useBusStops } from "../../providers/BusStopsContext";
import { useParams } from "react-router-dom";
import ErrorView from "../../components/ErrorView";
import ProgressBar from "./ProgressBar";
import DonationsHistory from "./DonationsHistory";
import { useConstants } from "../../providers/ConstantsContext";

const BusStopPage: FunctionComponent = () => {
  let { id } = useParams();
  const { busStops } = useBusStops();
  const { targetDonationForEach } = useConstants();

  const busStop = busStops.find((stop) => stop.stopId.toString() === id);

  useEffect(() => {
    document.title = busStop ? busStop.name : "Bus Stop " + id;
  }, []);

  if (!busStop) {
    return <ErrorView errorMessage="We couldn't find the specified Bus Stop" />;
  } else {
    return (
      <Container maxWidth={"md"}>
        <Box
          display="flex"
          width={"100%"}
          alignItems="center"
          justifyContent="center"
        >
          <Typography color="inherit" variant={"h4"}>
            {busStop.name}
          </Typography>
        </Box>
        <ProgressBar
          progress={
            (busStop.donationsRaisedInDollars / targetDonationForEach) * 100
          }
        ></ProgressBar>
        <DonationsHistory busStop={busStop}></DonationsHistory>
      </Container>
    );
  }
};

export default BusStopPage;
