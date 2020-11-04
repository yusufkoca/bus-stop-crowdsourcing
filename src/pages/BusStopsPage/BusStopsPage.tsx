import React, { FunctionComponent, useEffect } from "react";
import BusStopsTable from "./BusStopsTable";
import { Container, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { useBusStops } from "../../providers/BusStopsContext";

const BusStopsPage: FunctionComponent = () => {
  const { busStops, getBusStops } = useBusStops();

  useEffect(() => {
    document.title = "Bus Stops";
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
        <Typography color="inherit" variant={"h4"}>
          Bus Stops
        </Typography>
      </Box>
      <BusStopsTable rows={busStops} />
    </Container>
  );
};

export default BusStopsPage;
