import React, { useEffect } from "react";
import { BusStop } from "../types";
import { useSnackbar } from "notistack";
import busStopService from "../api/busStopService";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

type BusStopsContextType = {
  busStops: BusStop[];
  getBusStops: () => void;
};

const BusStopsContext = React.createContext<BusStopsContextType>({
  busStops: [],
  getBusStops: () => {},
});
BusStopsContext.displayName = "BusStopsContext";

const BusStopsProvider = ({ children }: { children: React.ReactNode }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [busStops, setBusStops] = React.useState<BusStop[]>([]);

  useEffect(() => {
    getBusStops();
  }, []);

  const getBusStops = () => {
    try {
      const data = busStopService.getAll();
      setBusStops(data);
    } catch (error) {
      console.log(error);
      //There might be a timer here to retry get request after a while.
      enqueueSnackbar(error.message, {
        variant: "error",
        action: (
          <Button variant="outlined" onClick={getBusStops}>
            Try Again
          </Button>
        ),
      });
    }
  };

  return (
    <BusStopsContext.Provider value={{ busStops, getBusStops }}>
      {children}
    </BusStopsContext.Provider>
  );
};

const useBusStops = () => {
  const context = React.useContext(BusStopsContext);
  if (context === undefined) {
    throw new Error("useBusStops must be used within a BusStopsProvider");
  }

  return context;
};
export { BusStopsProvider, BusStopsContext, useBusStops };
