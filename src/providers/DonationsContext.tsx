import React from "react";
import { Donation, Donor } from "../types/Donation";
import { useBusStops } from "./BusStopsContext";

type DonationsContextType = {
  donations: Donation[];
  addDonation: (
    busStopId: number,
    donationAmount: number,
    donor: Donor
  ) => void;
};

const DonationsContext = React.createContext<DonationsContextType>({
  donations: [],
  addDonation: (busStopId: number, donationAmount: number, donor: Donor) => {
    console.log("not implemented");
  },
});
DonationsContext.displayName = "DonationsContext";

const DonationsProvider = ({ children }: { children: React.ReactNode }) => {
  const { addDonationToBusStop } = useBusStops();
  const [donations, setDonations] = React.useState<Donation[]>([]);

  const addDonation = (
    busStopId: number,
    donationAmount: number,
    donor: Donor
  ) => {
    const result = addDonationToBusStop(busStopId, donationAmount);
    if (result) {
      const donation = {
        amount: donationAmount,
        busStopId: busStopId,
        date: new Date(),
        donor: donor,
      };
      setDonations([...donations, donation]);
    }
  };

  return (
    <DonationsContext.Provider value={{ donations: donations, addDonation }}>
      {children}
    </DonationsContext.Provider>
  );
};

const useDonations = () => {
  const context = React.useContext(DonationsContext);
  if (context === undefined) {
    throw new Error("useDonations must be used within a DonationsProvider");
  }

  return context;
};
export { DonationsProvider, DonationsContext, useDonations };
