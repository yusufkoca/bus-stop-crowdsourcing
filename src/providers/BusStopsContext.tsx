import React, { ReactElement, useEffect } from "react";
import { BusStop } from "../types";
import { useSnackbar } from "notistack";
import busStopService from "../api/busStopService";
import { Button } from "@material-ui/core";

type BusStopsContextType = {
  busStops: BusStop[];
  getBusStops: () => void;
  addDonationToBusStop: (busStopId: number, donationAmount: number) => boolean;
};

const BusStopsContext = React.createContext<BusStopsContextType>({
  busStops: [],
  getBusStops: () => {
    console.log("not implemented");
  },
  addDonationToBusStop: () => {
    return false;
  },
});
BusStopsContext.displayName = "BusStopsContext";

export type BusStopsProviderProps = {
  children?: React.ReactNode;
  defaultValue?: BusStop[];
};

const BusStopsProvider = ({
  children,
  defaultValue = [],
}: BusStopsProviderProps): ReactElement => {
  const { enqueueSnackbar } = useSnackbar();
  const [busStops, setBusStops] = React.useState<BusStop[]>(defaultValue);

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

  const optimisticUpdate = (index: number, donationAmount: number) => {
    setBusStops([
      ...busStops.slice(0, index),
      {
        ...busStops[index],
        donationsRaisedInDollars:
          busStops[index].donationsRaisedInDollars + donationAmount,
      },
      ...busStops.slice(index + 1),
    ]);
  };

  const addDonationToBusStop = (busStopId: number, donationAmount: number) => {
    try {
      busStopService.addDonation(busStopId, donationAmount);
      const index = busStops.findIndex(
        (busStop) => busStop.stopId === busStopId
      );
      if (index >= 0) {
        optimisticUpdate(index, donationAmount);
      } else {
        getBusStops();
      }
      return true;
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, {
        variant: "error",
      });
    }
    return false;
  };

  return (
    <BusStopsContext.Provider
      value={{ busStops, getBusStops, addDonationToBusStop }}
    >
      {children}
    </BusStopsContext.Provider>
  );
};

const useBusStops = (): BusStopsContextType => {
  const context = React.useContext(BusStopsContext);
  if (context === undefined) {
    throw new Error("useBusStops must be used within a BusStopsProvider");
  }

  return context;
};
export { BusStopsProvider, BusStopsContext, useBusStops };
