import React, { FunctionComponent, useEffect } from "react";
import BusStopsTable from "./BusStopsTable";
import { Container, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { BusStop } from "../../types";
import busStopService from "../../api/busStopService";

const UnitsPage: FunctionComponent = () => {
  const [busStops, setBusStops] = React.useState<BusStop[]>([]);

  useEffect(() => {
    document.title = "Bus Stops";
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
        <Typography color="inherit" variant={"h4"}>
          Bus Stops
        </Typography>
      </Box>
      <BusStopsTable rows={busStops} />
    </Container>
  );
};

export default UnitsPage;
