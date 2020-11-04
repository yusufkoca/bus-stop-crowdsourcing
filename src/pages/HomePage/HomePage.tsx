import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import MapView from "./MapView";
import { BusStop } from "../../types";
import busStopService from "../../api/busStopService";

const HomePage = () => {
  const [busStops, setBusStops] = React.useState<BusStop[]>([]);

  useEffect(() => {
    document.title = "Crowdsourcing App";
    try {
      const data = busStopService.getAll();
      setBusStops(data);
    } catch (error) {
      console.log(error);
      //TODO show error
    }
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
