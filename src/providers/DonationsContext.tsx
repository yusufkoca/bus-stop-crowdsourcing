import React from "react";
import { Donation } from "../types/Donation";

type DonationsContextType = {
  donations: Donation[];
  addDonation: (donation: Donation) => void;
};

const DonationsContext = React.createContext<DonationsContextType>({
  donations: [],
  addDonation: () => {},
});
DonationsContext.displayName = "DonationsContext";

const DonationsProvider = ({ children }: { children: React.ReactNode }) => {
  const [donations, setDonations] = React.useState<Donation[]>([]);

  const addDonation = (donation: Donation) => {
    setDonations([...donations, donation]);
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
