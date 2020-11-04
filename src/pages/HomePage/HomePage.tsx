import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import MapView from "./MapView";
import { useBusStops } from "../../providers/BusStopsContext";

const HomePage = () => {
  const { busStops, getBusStops } = useBusStops();

  useEffect(() => {
    document.title = "Crowdsourcing App";
    getBusStops();
  }, []);

  return (
    <Container maxWidth={"md"}>
      <Box
        display="flex"
        width={"100%"}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant={"h2"}>Home Page</Typography>
      </Box>
      <MapView busStops={busStops}></MapView>
    </Container>
  );
};

export default HomePage;
